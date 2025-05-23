"use client";

import LoadingButton from "@/components/loading-button";
import ResponsiveDrawer from "@/components/responsive-drawer";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Form,
  FormControl,
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

interface ButtonAiCreateMultipleChapterParagraphsProps extends ButtonProps {
  bibleStudyId: string;
}
export default function ButtonAiCreateMultipleChapterParagraphs({
  bibleStudyId,
  ...props
}: ButtonAiCreateMultipleChapterParagraphsProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <DialogAiCreateMultipleChapterParagraphs
        open={open}
        setOpen={setOpen}
        bibleStudyId={bibleStudyId}
      />
    </>
  );
}

interface DialogAiCreateMultipleChapterParagraphsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  bibleStudyId: string;
}

export function DialogAiCreateMultipleChapterParagraphs({
  open,
  setOpen,
  bibleStudyId,
}: DialogAiCreateMultipleChapterParagraphsProps) {
  const schema = z.object({
    baseUrl: z.string().url(),
  });
  type Schema = z.infer<typeof schema>;
const [isLoading, setIsLoading] = useState(false);
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      baseUrl: "https://whitethroneministries.org/resources/lessons",
    },
  });

  async function handleClick(input: Schema) {
    setIsLoading(true);
    try {
        const response = await ky.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/scrapping/${bibleStudyId}`,
      {
        body: JSON.stringify({
          baseUrl: input.baseUrl,
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
      title="AI Generate multiple paragraphs"
      description="Use AI to generate paragraphs for all the chapters added under the bible study series"
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
