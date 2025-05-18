import { error } from 'console'
import z from 'zod'

const requiredString = z.string({required_error:"Required",}).trim()

// Bible study series 
export const bibleStudySeriesSchema = z.object({
    id: z.string().optional(),
    name:requiredString,    
})
export type BibleStudySeriesSchema = z.infer<typeof bibleStudySeriesSchema>

// Chapter 
export const chapterSchema = z.object({
    id: z.string().optional(),
    title:requiredString,    
    bibleStudyId:requiredString
})
export type ChapterSchema = z.infer<typeof chapterSchema>