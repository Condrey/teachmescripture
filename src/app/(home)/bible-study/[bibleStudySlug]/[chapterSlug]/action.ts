'use server'

import prisma from "@/lib/prisma"
import { chapterDataInclude, paragraphDataInclude } from "@/lib/types"
import { slugify } from "@/lib/utils"
import { ChapterSchema, chapterSchema, paragraphSchema, ParagraphSchema } from "@/lib/validation"
import { cache } from "react"

async function chapterBySlug(slug:string){
return await prisma.chapter.findUnique({
    where:{slug},
    include: chapterDataInclude
})
}

export const getChapterBySlug = cache(chapterBySlug)


export async function upsertParagraph(input:ParagraphSchema){
        // TODO: Perform authentication 

const {id,chapterId
    ,isTag,line,index,
} = paragraphSchema.parse(input)

const data = await prisma.paragraph.upsert({
    where:{id},
    create:{chapterId
    ,isTag,line,index,},update:{chapterId
    ,isTag,line,index,},
    include:paragraphDataInclude
})
return data;
}

export async function deleteParagraph(id:string){
    // TODO: Perform authentication 
    const deleted = await prisma.paragraph.delete({where:{id}})
    return deleted;
}

export async function deleteAllParagraphs(chapterId:string){
    // TODO: Perform authentication 
    await prisma.paragraph.deleteMany({where:{chapterId}})
}