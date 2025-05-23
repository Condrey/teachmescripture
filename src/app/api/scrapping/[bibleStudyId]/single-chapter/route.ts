
import prisma from "@/lib/prisma";
import { bibleStudyDataInclude, chapterDataInclude } from "@/lib/types";
import { HTMLWebBaseLoader } from "@langchain/community/document_loaders/web/html";
import { NextRequest } from "next/server";
import z from "zod";
import { aiCoreWhole } from "../../ai-core-whole";

type Params = Promise<{ bibleStudyId: string }>;

export const maxDuration = 60;
export async function POST(req: NextRequest, segmentData: { params: Params }) {
  const body = await req.json();
  const { bibleStudyId } = await segmentData.params;
  const schema = z.object({
    baseUrl: z.string().url().trim(),
    chapterSlug:z.string().trim(),
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

    const { baseUrl ,chapterSlug} = parseResult.data;
    const paragraphs = await generateParagraphs(bibleStudyId, baseUrl,chapterSlug);
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

async function generateParagraphs(bibleStudyId: string, baseUrl: string,chapterSlug: string) {
  
  const chapter= await prisma.chapter.findUnique({where:{slug:chapterSlug},include:chapterDataInclude})
   if (!chapter)
    return Response.json(
      { error: "Chapter not found" },
      { status: 404, statusText: "Chapter not found" }
    );
  const bibleStudy = chapter.bibleStudy
 
  
      const url =baseUrl+'/'+chapterSlug;
      const content = (await getContent(url)).replaceAll("<br><br>", "<br>")
        .replaceAll('"', '\"')
        .replaceAll("'", "\'")
        ;
      const generatedParagraphs = await aiCoreWhole({
        bibleStudyId,
        content,
        bibleStudyName: bibleStudy?.name!,
        chapterSlug,
        chapterName:chapter.title, chapterId:chapter.id
      });

      console.log('Successfully generated paragraphs for bible study: ', chapter.title);
console.log('Generated paragraphs: ', generatedParagraphs);
  return generatedParagraphs;
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
  // console.info({url,content})
  return content;
}
