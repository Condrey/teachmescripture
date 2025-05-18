"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import { useState } from "react";
import { BibleStudy } from "../../generated/prisma";
import FormAddEditBibleStudy from "./form-add-edit-bible-study";

interface ButtonAddEditBibleStudyProps extends ButtonProps {
  bibleStudyToEdit?: BibleStudy;
  maxQuantity?:number
}

export default function ButtonAddEditBibleStudy({
  bibleStudyToEdit,maxQuantity,
  ...props
}: ButtonAddEditBibleStudyProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <FormAddEditBibleStudy
        open={open}
        setOpen={setOpen}
        bibleStudyToEdit={bibleStudyToEdit}
        maxQuantity={maxQuantity}
      />
    </>
  );
}
