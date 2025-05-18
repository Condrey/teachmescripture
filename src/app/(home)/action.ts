'use server'

import prisma from "@/lib/prisma"
import { bibleStudyDataInclude } from "@/lib/types";
import { slugify } from "@/lib/utils";
import { bibleStudySeriesSchema, BibleStudySeriesSchema } from "@/lib/validation";
import { cache } from "react";

async function bibleStudySeries(maxQuantity?:number){
const data = await prisma.bibleStudy.findMany({take:maxQuantity, orderBy:{index:!maxQuantity?'asc':'desc'},include:bibleStudyDataInclude})
return data;
}

export const getBibleStudySeriesByMaxQuantity = cache(bibleStudySeries)

export async function upsertBibleStudySeries(input:BibleStudySeriesSchema){
        // TODO: Perform authentication 

const {id,name} = bibleStudySeriesSchema.parse(input)
const slug = slugify(name)
const data = await prisma.bibleStudy.upsert({
    where:{id},
    create:{name,slug},update:{name,slug},
    include:bibleStudyDataInclude
})
return data;
}

export async function deleteBibleStudySeries(id:string){
    // TODO: Perform authentication 
    const deleted = await prisma.bibleStudy.delete({where:{id}})
    return deleted;
}