'use client'

import { Button, ButtonProps } from "@/components/ui/button"
import { ChapterData, ParagraphData } from "@/lib/types"
import { useState } from "react"
import FormAddEditParagraph from "./form-add-edit-paragraph"
import { Chapter } from "@/generated/prisma"

interface ButtonAddEditParagraphProps extends ButtonProps{
    paragraphToEdit?:ParagraphData
    chapter?:ChapterData
}

export default  function ButtonAddEditParagraph({paragraphToEdit,chapter,...props}:ButtonAddEditParagraphProps){
 const [open,setOpen] = useState(false)

 return <>
 <Button onClick={()=>setOpen(true)} {...props}/>
    <FormAddEditParagraph open={open} setOpen={setOpen} paragraphToEdit={paragraphToEdit} chapter={chapter!||paragraphToEdit?.chapter!}/>
 </>
}