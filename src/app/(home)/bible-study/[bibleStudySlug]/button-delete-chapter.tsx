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
import { useDeleteChapterMutation } from "./mutation";
import { Chapter } from "@/generated/prisma";
import { ChapterData } from "@/lib/types";

interface ButtonDeleteChapterProps extends ButtonProps {
  chapterToDelete: ChapterData;
}

export default function ButtonDeleteChapter({
  chapterToDelete,
  ...props
}: ButtonDeleteChapterProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <DialogDeleteChapter chapter={chapterToDelete} open={open}
      setOpen={setOpen}
      />
    </>
  );
}


interface DialogDeleteChapterProps{
    open:boolean;
    setOpen:(open:boolean)=>void;
    chapter:ChapterData
}
export function DialogDeleteChapter({open,setOpen,chapter,}:DialogDeleteChapterProps){
      const {mutate,isPending} = useDeleteChapterMutation(chapter.bibleStudy?.slug!);
  function handleDelete() {
    mutate(chapter.id,{onSuccess:()=>setOpen(false)})
  }
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold tracking-tight uppercase ">
              <AlertTriangleIcon className="inline" />
              Delete <q>{chapter.title}</q> bible study series
            </DialogTitle>
            <DialogDescription>
              Dangerous action. Please note that this action is irreversible
            </DialogDescription>
          </DialogHeader>
          <p>
            You are about to delete <strong>{chapter.title}</strong> bible study series and all its
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