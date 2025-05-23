'use server'

import prisma from "@/lib/prisma"
import { bibleStudyDataInclude, chapterDataInclude } from "@/lib/types"
import { slugify } from "@/lib/utils"
import { ChapterSchema, chapterSchema } from "@/lib/validation"
import { cache } from "react"

async function bibleStudyBySlug(slug:string){
return await prisma.bibleStudy.findUnique({
    where:{slug},
    include: bibleStudyDataInclude,
})
}

export const getBibleStudyBySlug = cache(bibleStudyBySlug)


export async function upsertChapter(input:ChapterSchema){
        // TODO: Perform authentication 

const {id,title, bibleStudyId} = chapterSchema.parse(input)
const slug = slugify(title)
const data = await prisma.chapter.upsert({
    where:{id},
    create:{title,slug,bibleStudyId},update:{title,slug,bibleStudyId},
    include:chapterDataInclude
})
return data;
}

export async function deleteChapter(id:string){
    // TODO: Perform authentication 
    const deleted = await prisma.chapter.delete({where:{id}})
    return deleted;
}