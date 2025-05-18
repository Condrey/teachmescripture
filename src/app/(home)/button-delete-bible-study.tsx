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
import { BibleStudy } from "../../generated/prisma";
import { useDeleteBibleStudiesMutation } from "./mutation";

interface ButtonDeleteBibleStudyProps extends ButtonProps {
  bibleStudyToDelete: BibleStudy;
  maxQuantity?: number;
}

export default function ButtonDeleteBibleStudy({
  bibleStudyToDelete,
  maxQuantity,
  ...props
}: ButtonDeleteBibleStudyProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <DialogDeleteBibleStudy bibleStudy={bibleStudyToDelete} open={open}
      setOpen={setOpen}
      maxQuantity={maxQuantity}
      />
    </>
  );
}


interface DialogDeleteBibleStudyProps{
    open:boolean;
    setOpen:(open:boolean)=>void;
    bibleStudy:BibleStudy;maxQuantity?:number
}
export function DialogDeleteBibleStudy({open,setOpen,bibleStudy: { name, id },maxQuantity}:DialogDeleteBibleStudyProps){
      const {mutate,isPending} = useDeleteBibleStudiesMutation(maxQuantity);
  function handleDelete() {
    mutate(id,{onSuccess:()=>setOpen(false)})
  }
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold tracking-tight uppercase ">
              <AlertTriangleIcon className="inline" />
              Delete <q>{name}</q> bible study series
            </DialogTitle>
            <DialogDescription>
              Dangerous action. Please note that this action is irreversible
            </DialogDescription>
          </DialogHeader>
          <p>
            You are about to delete <strong>{name}</strong> bible study series and all its
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