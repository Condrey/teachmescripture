'use client'

import { Button, ButtonProps } from "@/components/ui/button"
import { ChapterData } from "@/lib/types"
import { useState } from "react"
import FormAddEditChapter from "./form-add-edit-chapter"
import { BibleStudy } from "@/generated/prisma"

interface ButtonAddEditChapterProps extends ButtonProps{
    chapterToEdit?:ChapterData
    bibleStudy?:BibleStudy
}

export default  function ButtonAddEditChapter({chapterToEdit,bibleStudy,...props}:ButtonAddEditChapterProps){
 const [open,setOpen] = useState(false)

 return <>
 <Button onClick={()=>setOpen(true)} {...props}/>
    <FormAddEditChapter open={open} setOpen={setOpen} chapterToEdit={chapterToEdit} bibleStudy={bibleStudy||chapterToEdit?.bibleStudy!}/>
 </>
}