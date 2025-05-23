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
      "This determines whether the paragraph is a tag or not. When it is in between <bl></bl>. If a <quote></quote> is part of the line, split the paragraph and let the quote be an independent paragraph."
    ),
  chapterId: requiredString,
});
export type ParagraphSchema = z.infer<typeof paragraphSchema>;
