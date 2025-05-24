import z from "zod";

const requiredString = z.string({ required_error: "Required" }).trim();

// Bible study series
export const bibleStudySeriesSchema = z.object({
  id: z.string().optional(),
  name: requiredString,
});
export type BibleStudySeriesSchema = z.infer<typeof bibleStudySeriesSchema>;

// Chapter
export const chapterSchema = z.object({
  id: z.string().optional(),
  title: requiredString,
  bibleStudyId: requiredString,
});
export type ChapterSchema = z.infer<typeof chapterSchema>;

// Paragraph
export const paragraphSchema = z.object({
  id: z.string().optional().describe("This is the id of the paragraph"),
  index: z
    .number()
    .optional()
    .describe("This is the line number, or hierarchy the paragraph appears"),
  line: requiredString.describe("This is the paragraph line in html tags"),
  isTag: z
    .boolean()
    .describe(
      "This determines whether the paragraph is a tag or not. When it is in between <bl></bl>. "
    ),
  chapterId: requiredString,
});
export type ParagraphSchema = z.infer<typeof paragraphSchema>;

// about page 
 export const aboutPageSchema = z.object({
        id: z.string().optional(),
        aboutText: z.string().min(1, "About text is required").max(500, "About text must be less than 500 characters"),})
        export type AboutPageSchema = z.infer<typeof aboutPageSchema>;
