'use client'

import LoadingButton from "@/components/loading-button";
import ResponsiveDrawer from "@/components/responsive-drawer";
import { Form, FormControl, FormField, FormFooter, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BibleStudy } from "@/generated/prisma";
import { ChapterData } from "@/lib/types";
import { chapterSchema, ChapterSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit3Icon, PlusCircle, PlusCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpsertChapterMutation } from "./mutation";

interface FormAddEditChapterProps{
    bibleStudy:BibleStudy
    chapterToEdit?:ChapterData
    ;open:boolean;
    setOpen:(open:boolean)=>void
}
export default function FormAddEditChapter({open,setOpen,chapterToEdit,bibleStudy}:FormAddEditChapterProps){

    const form = useForm<ChapterSchema>({
        resolver: zodResolver(chapterSchema),
        values:{
            id: chapterToEdit?.id||'',
            title: chapterToEdit?.title||'',
            bibleStudyId:chapterToEdit?.bibleStudyId||bibleStudy?.id!
        }
    })
    const {mutate,isPending} =useUpsertChapterMutation(bibleStudy?.slug!)

    function handleSubmit(input:ChapterSchema){
        mutate(input,{onSuccess:()=>setOpen(false)})
    }

    return <ResponsiveDrawer 
    open={open}
    setOpen={setOpen}
    title={chapterToEdit?'Edit this chapter':'Create a new chapter'}
    description={   `Series: ${bibleStudy?.name} bible study series`}
    >
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
            control={form.control}
            name="title"
            render={({field})=>(
                <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input placeholder="enter the chapter title here" {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormFooter>
                <LoadingButton loading={isPending}>
                    {chapterToEdit?<Edit3Icon/>:<PlusCircleIcon/>}
                    {chapterToEdit?'Update':'Create new'} chapter
                </LoadingButton>
            </FormFooter>
        </form>
    </Form>
    </ResponsiveDrawer>
}