"use client";

import LoadingButton from "@/components/loading-button";
import ResponsiveDrawer from "@/components/responsive-drawer";
import TipTapEditorWithHeader from "@/components/tip-tap-editor/tip-tap-editor-with-header";
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
import { Project } from "@/generated/prisma";
import { aboutPageSchema, AboutPageSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpsertAboutTextMutation } from "./mutation";

interface ButtonAddEditAboutTextProps extends ButtonProps {
  project?: Project;
}

export default function ButtonAddEditAboutText({
  project,
  ...props
}: ButtonAddEditAboutTextProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <DialogAddEditAboutText open={open} setOpen={setOpen} project={project} />
    </>
  );
}

export function DialogAddEditAboutText({
  open,
  setOpen,
  project,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  project?: Project;
}) {
  const form = useForm<AboutPageSchema>({
    resolver: zodResolver(aboutPageSchema),
    defaultValues: {
      aboutText: project?.aboutText || "",
      id: project?.id || "",
    },
  });
  const { mutate, isPending } = useUpsertAboutTextMutation();
  function handleSubmit(input: AboutPageSchema) {
    mutate(input, {
      onSuccess: (data) => {
        setOpen(false);
      },
    });
  }
  return (
    <ResponsiveDrawer
      open={open}
      setOpen={setOpen}
      title={project ? "Edit About Text" : "Add About Text"}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="aboutText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About Page</FormLabel>
                <FormControl>
                  <TipTapEditorWithHeader
                    initialContent={field.value}
                    onTextChanged={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormFooter>
            <LoadingButton loading={isPending}>Submit</LoadingButton>
          </FormFooter>
        </form>
      </Form>
    </ResponsiveDrawer>
  );
}
