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
import { useDeleteParagraphMutation } from "./mutation";
import { Paragraph } from "@/generated/prisma";
import { ParagraphData } from "@/lib/types";

interface ButtonDeleteParagraphProps extends ButtonProps {
  paragraphToDelete: ParagraphData;
}

export default function ButtonDeleteParagraph({
  paragraphToDelete,
  ...props
}: ButtonDeleteParagraphProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <DialogDeleteParagraph paragraph={paragraphToDelete} open={open}
      setOpen={setOpen}
      />
    </>
  );
}


interface DialogDeleteParagraphProps{
    open:boolean;
    setOpen:(open:boolean)=>void;
    paragraph:ParagraphData
}
export function DialogDeleteParagraph({open,setOpen,paragraph,}:DialogDeleteParagraphProps){
      const {mutate,isPending} = useDeleteParagraphMutation(paragraph.chapter?.slug!);
  function handleDelete() {
    mutate(paragraph.id,{onSuccess:()=>setOpen(false)})
  }
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold tracking-tight uppercase ">
              <AlertTriangleIcon className="inline" />
              Delete this bible study series paragraph
            </DialogTitle>
            <DialogDescription>
              Dangerous action. Please note that this action is irreversible
            </DialogDescription>
          </DialogHeader>
          <p>
            You are about to delete this bible study series paragraph and all its
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