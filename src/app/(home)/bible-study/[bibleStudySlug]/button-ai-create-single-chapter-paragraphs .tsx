"use client";

import LoadingButton from "@/components/loading-button";
import ResponsiveDrawer from "@/components/responsive-drawer";
import { Button, ButtonProps } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import ky from "ky";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface ButtonAiCreateSingleChapterParagraphsProps extends ButtonProps {
  bibleStudyId: string;
  chapterSlug?: string;
}
export default function ButtonAiCreateSingleChapterParagraphs({
  bibleStudyId,chapterSlug,
  ...props
}: ButtonAiCreateSingleChapterParagraphsProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <DialogAiCreateSingleChapterParagraphs
        open={open}
        setOpen={setOpen}
        bibleStudyId={bibleStudyId}
        chapterSlug={chapterSlug}
      />
    </>
  );
}

interface DialogAiCreateSingleChapterParagraphsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  bibleStudyId: string;
  chapterSlug?: string;
}

export function DialogAiCreateSingleChapterParagraphs({
  open,
  setOpen,
  bibleStudyId,chapterSlug
}: DialogAiCreateSingleChapterParagraphsProps) {
  const schema = z.object({
    baseUrl: z.string().url().trim(),
    chapterSlug: z.string().trim(),
  });
  type Schema = z.infer<typeof schema>;
const [isLoading, setIsLoading] = useState(false);
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      baseUrl: "https://whitethroneministries.org/resources/lessons",
      chapterSlug
    },
  });

  async function handleClick(input: Schema) {
    setIsLoading(true);
    try {
        const response = await ky.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/scrapping/${bibleStudyId}/single-chapter`,
      {
        body: JSON.stringify({
          baseUrl: input.baseUrl,chapterSlug
        }),
      }
    );
    if (!response.ok) {
        setIsLoading(false);
      toast.error(response.statusText);
    } else {
      setOpen(false);
      toast.success(response.statusText);
    }
    } catch (error) {
        console.error(error);
        setIsLoading(false);    
        toast.error(`An error occurred while generating paragraphs: ${error}`);
    }
  }
  return (
    <ResponsiveDrawer
      open={open}
      setOpen={setOpen}
      title="AI Generate single paragraphs"
      description="Use AI to generate paragraphs for all this chapter"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleClick)} className="space-y-4">
          <FormField
            control={form.control}
            name="baseUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Base URL</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter the base url" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />   <FormField
            control={form.control}
            name="chapterSlug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Url endpoint</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter the slug as url endpoint" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>Do not include first slash "/"</FormDescription>
              </FormItem>
            )}
          />
          <FormFooter>
            <LoadingButton loading={isLoading}>
              Start scrapping
            </LoadingButton>
          </FormFooter>
        </form>
      </Form>
    </ResponsiveDrawer>
  );
}
