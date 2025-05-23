"use client";

import LoadingButton from "@/components/loading-button";
import ResponsiveDrawer from "@/components/responsive-drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Chapter } from "@/generated/prisma";
import { ChapterData, ParagraphData } from "@/lib/types";
import { paragraphSchema, ParagraphSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit3Icon, PlusCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useUpsertParagraphMutation } from "./mutation";
import { NumberInput } from "@/components/number-input/number-input";
import { Checkbox } from "@/components/ui/checkbox";
import TipTapEditorWithHeader from "@/components/tip-tap-editor/tip-tap-editor-with-header";

interface FormAddEditParagraphProps {
  chapter: ChapterData;
  paragraphToEdit?: ParagraphData;
  open: boolean;
  setOpen: (open: boolean) => void;
}
export default function FormAddEditParagraph({
  open,
  setOpen,
  paragraphToEdit,
  chapter,
}: FormAddEditParagraphProps) {
  const form = useForm<ParagraphSchema>({
    resolver: zodResolver(paragraphSchema),
    defaultValues: {
      id: paragraphToEdit?.id || "",
      index: paragraphToEdit?.index,
      line: paragraphToEdit?.line || "",
      isTag: paragraphToEdit?.isTag || false,
      chapterId: paragraphToEdit?.chapterId || chapter?.id!,
    },
  });
  const { mutate, isPending } = useUpsertParagraphMutation(chapter?.slug!);

  function handleSubmit(input: ParagraphSchema) {
    mutate(input, { onSuccess: () => setOpen(false) });
  }

  return (
    <ResponsiveDrawer
      open={open}
      setOpen={setOpen}
      title={paragraphToEdit ? "Edit this paragraph" : "Create a new paragraph"}
      description={`Series: ${chapter?.bibleStudy?.name} - ${chapter.title} bible study series`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="index"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Paragraph number</FormLabel>
                    <FormControl>
                      <NumberInput
                        placeholder="enter the paragraph number here"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Can leave it empty for auto-assigning</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /><FormField
                control={form.control}
                name="isTag"
                render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  This is a tag?
                </FormLabel>
                <FormDescription>
                 Check if this is a tag
                </FormDescription>
              </div>
            </FormItem>
                )}
              />
          <FormField
            control={form.control}
            name="line"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Paragraph</FormLabel>
                <FormControl>
                                  <TipTapEditorWithHeader initialContent={field.value} onTextChanged={field.onChange} placeholder="enter the paragraph line here"  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormFooter>
            <LoadingButton loading={isPending}>
              {paragraphToEdit ? <Edit3Icon /> : <PlusCircleIcon />}
              {paragraphToEdit ? "Update" : "Create new"} paragraph
            </LoadingButton>
          </FormFooter>
        </form>
      </Form>
    </ResponsiveDrawer>
  );
}
