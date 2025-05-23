"use client";

import LoadingButton from "@/components/loading-button";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteAllParagraphsMutation } from "./mutation";
import { Chapter, Paragraph } from "@/generated/prisma";
import { ParagraphData } from "@/lib/types";

interface ButtonDeleteAllParagraphsProps extends ButtonProps {
  chapterWithParagraphs: Chapter;
}

export default function ButtonDeleteAllParagraphs({
    chapterWithParagraphs
,
  ...props
}: ButtonDeleteAllParagraphsProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <DialogDeleteAllParagraphs chapter={chapterWithParagraphs} open={open}
      setOpen={setOpen}
      />
    </>
  );
}


interface DialogDeleteAllParagraphsProps{
    open:boolean;
    setOpen:(open:boolean)=>void;
    chapter:Chapter
}
export function DialogDeleteAllParagraphs({open,setOpen,chapter,}:DialogDeleteAllParagraphsProps){
      const {mutate,isPending} = useDeleteAllParagraphsMutation(chapter.slug!);
  function handleDelete() {
    mutate(chapter.id,{onSuccess:()=>setOpen(false)})
  }
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold tracking-tight uppercase text-destructive">
              <AlertTriangleIcon className="inline" />
              Delete all paragraphs in {chapter.title}?
            </DialogTitle>
            <DialogDescription>
              Dangerous action. Please note that this action is irreversible
            </DialogDescription>
          </DialogHeader>
          <p>
            You are about to delete all paragraphs in <strong>{chapter.title}</strong> and all its
            related information from the database, <i>continue with caution!</i>
          </p>
          <DialogFooter>
            <Button onClick={() => setOpen(false)} variant={'outline'}>Cancel</Button>
            <LoadingButton
              loading={isPending}
              variant={"destructive"}
              onClick={handleDelete}
            >
              Delete
            </LoadingButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
}