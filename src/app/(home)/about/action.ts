'use server'

import { Project } from "@/generated/prisma"
import prisma from "@/lib/prisma"
import { webName } from "@/lib/utils"
import { aboutPageSchema, AboutPageSchema } from "@/lib/validation"
import { cache } from "react"

async function aboutContent() {
    return await prisma.project.findFirst()
}
export const getProject = cache(aboutContent)

export async function upsertAboutText(input: AboutPageSchema) {
    const {aboutText,id} = aboutPageSchema.parse(input)
return await prisma.project.upsert({
    where:{id},
    create:{aboutText,webName},update:{aboutText}
})
 
}