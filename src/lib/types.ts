import { Prisma } from "@/generated/prisma";

export const paragraphDataInclude = {
    chapter:true
} satisfies Prisma.ParagraphInclude
export type ParagraphData =Prisma.ParagraphGetPayload<{include: typeof paragraphDataInclude}>

export const chapterDataInclude = {
    paragraphs:{include:paragraphDataInclude},
    bibleStudy:true
} satisfies Prisma.ChapterInclude
export type ChapterData =Prisma.ChapterGetPayload<{include: typeof chapterDataInclude}>


export const bibleStudyDataInclude = {
    chapters:{include:chapterDataInclude,orderBy:{index:'asc'}},_count:{select:{chapters:true}}
} satisfies Prisma.BibleStudyInclude
export type BibleStudyData =Prisma.BibleStudyGetPayload<{include: typeof bibleStudyDataInclude}>
