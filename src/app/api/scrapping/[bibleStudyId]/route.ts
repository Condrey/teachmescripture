import prisma from "@/lib/prisma";
import { bibleStudyDataInclude } from "@/lib/types";
import { HTMLWebBaseLoader } from "@langchain/community/document_loaders/web/html";
import { NextRequest } from "next/server";
import z from "zod";
import { aiCoreWhole } from "../ai-core-whole";

type Params = Promise<{ bibleStudyId: string }>;

export const maxDuration = 60;
export async function POST(req: NextRequest, segmentData: { params: Params }) {
  const body = await req.json();
  const { bibleStudyId } = await segmentData.params;
  const schema = z.object({
    baseUrl: z.string().url().trim(),
  });

  try {
    const parseResult = schema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json(
        {
          error: "Invalid input, request body has an error, or typos ",
        },
        {
          status: 400,
          statusText: "Invalid input, request body has an error, or typos ",
        }
      );
    }

    const { baseUrl } = parseResult.data;
    const paragraphs = await generateParagraphs(bibleStudyId, baseUrl);
    return Response.json(
      {
        message: "Successfully generated paragraphs for all the chapters",
        paragraphs,
      },
      {
        status: 200,
        statusText: "Successfully generated paragraphs for all the chapters",
      }
    );
  } catch (e) {
    console.error("ScrappingErr: ", e);
    return Response.json(
      { error: `Internal server error: ${e} ` },
      { status: 500, statusText: "Internal Sever error" }
    );
  }
}

async function generateParagraphs(bibleStudyId: string, baseUrl: string) {
  const bibleStudy = await prisma.bibleStudy.findUnique({
    where: { id: bibleStudyId },
    include: bibleStudyDataInclude,
  });
  if (!bibleStudy)
    return Response.json(
      { error: "Bible study not found" },
      { status: 404, statusText: "Bible study not found" }
    );
  const promises = bibleStudy.chapters.map(
    async ({ slug: chapterSlug, title: chapterName, id: chapterId }) => {
      const url = `${baseUrl}/${chapterSlug}`;
      const content = await getContent(url);
      const generatedParagraphs = await aiCoreWhole({
        bibleStudyId,
        content,
        bibleStudyName: bibleStudy.name,
        chapterSlug,
        chapterName,
        chapterId,
      });
      return generatedParagraphs || []; // Return an empty array if nothing was generated 
    }
  );

  const results = await Promise.all(promises);

  // Flatten the results and assign to paragraphs
  const paragraphs = results.flat();

  return paragraphs;
}

async function getContent(url: string) {
  const loader = new HTMLWebBaseLoader(url);
  const docs = await loader.load();
  let content = docs[0].pageContent;
  const startIndex = content.indexOf("Russian");
  const endIndex = content.indexOf("Powered by White Throne Ministries");
  if (endIndex !== -1) {
    content = content.substring(startIndex, endIndex);
  }
  return content
    .replaceAll("<br><br>", "<br>")
    .replaceAll('"', '"')
    .replaceAll("'", "'");
}
