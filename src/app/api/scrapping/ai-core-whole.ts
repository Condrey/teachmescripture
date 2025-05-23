import prisma from "@/lib/prisma";
import { chapterDataInclude } from "@/lib/types";
import { paragraphSchema } from "@/lib/validation";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI } from "@langchain/openai";

import z from "zod";

const bibleStudyZod = z.object({
  bibleStudyName: z
    .string()
    .describe("This is the name of the Bible study series"),
  chapterSlug: z
    .string()
    .describe(
      "This is the slug of the chapter whose paragraphs are to be scrapped from the website, the slug is the url endpoint for allocating the paragraph resources."
    ),
  chapterId: z.string().describe("This is the id of the chapter."),
  chapterName: z
    .string()
    .describe("This is the name of the chapter in the bible series"),
  chapterImageUrl: z
    .string()
    .optional()
    .describe("This is the image link for the chapter"),
  paragraphs: z
    .array(paragraphSchema)
    .describe(
      "Generate paragraphs from the markdown content scrapped from the web. Maintain the html tags used"
    ),
});
// Instantiate the model
const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

export async function aiCoreWhole({
  bibleStudyName,
  chapterName,
  chapterId,
  chapterSlug,
  content,
}: {
  bibleStudyId: string;
  bibleStudyName: string;
  chapterSlug: string;
  chapterId: string;
  chapterName: string;
  content: string;
}) {
  const retries = 3;
  const chunkSize = 20;

  try {
    // const { user } = await validateRequest();
    // if (!user) throw new Error("Unauthorized");

    const parser = StructuredOutputParser.fromZodSchema(bibleStudyZod);

    const chain = RunnableSequence.from([
      ChatPromptTemplate.fromTemplate(
        "Extract content from web scrapped content, values returned should be in html tags.\n{format_instructions}\n{content}\n{bibleStudyName}\n{chapterName}\n{chapterSlug}\n{chapterId}\n\n"
      ),
      model,
      parser,
    ]);

    const scrappedParagraphs = await chain.invoke({
      content: content
        .replaceAll('"', '\"')
        .replaceAll("'", "\'")
        .replaceAll("<br><br>", "<br>"),
      bibleStudyName,
      chapterName,
      chapterSlug,
      format_instructions: parser.getFormatInstructions(),
      chapterId,
    });

    if (!scrappedParagraphs.paragraphs.length) return;

    for (let i = 0; i < scrappedParagraphs.paragraphs.length; i += chunkSize) {
      const chunk = scrappedParagraphs.paragraphs
        .slice(i, i + chunkSize)
        .map((f) => ({ ...f, id: chapterId + f.id }));
      console.log("chunk", chunk);
      for (let attempt = 0; attempt < retries; attempt++) {
        try {
          await prisma.$transaction([
            prisma.chapter.update({
              where: { slug: chapterSlug },
              data: {
                imageUrl: scrappedParagraphs.chapterImageUrl,
                paragraphs: {
                  createMany: {
                    data: chunk.map((data) => ({
                      id: data.id,
                      line: data.line,
                      isTag: data.isTag,
                      index: data.index,
                    })),
                    skipDuplicates: true,
                  },
                },
              },
            }),
          ]);

          console.log(
            `Chunk ${i / chunkSize + 1} - ${scrappedParagraphs.chapterName} (${
              chunk.length
            }) inserted successfully.`
          );
          break; // Exit retry loop if successful
        } catch (error) {
          console.error(
            `Error on attempt ${attempt + 1} for chunk ${i / chunkSize + 1}:`,
            error
          );
          if (attempt === retries - 1) {
            throw new Error("Max retries reached. Operation failed.");
          }
        }
      }
    }

    const chapter = await prisma.chapter.findUnique({
      where: {
        slug: chapterSlug,
      },
      include: chapterDataInclude,
    });
    return chapter?.paragraphs;
  } catch (e) {
    console.error(e);
    throw new Error("Error occurred with the AI");
  }
}
