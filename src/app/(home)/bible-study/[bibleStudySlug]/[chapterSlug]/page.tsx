import ButtonAddEditBibleStudy from "@/app/(home)/button-add-edit-bible-study";
import ButtonDeleteBibleStudy from "@/app/(home)/button-delete-bible-study";
import { Heading1, Heading2 } from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { Edit3Icon, PlusIcon, StarsIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { notFound } from "next/navigation";
import ButtonAddEditChapter from "../button-add-edit-chapter";
import ButtonDeleteChapter from "../button-delete-chapter";
import { getChapterBySlug } from "./action";
import ButtonAddEditParagraph from "./button-add-edit-paragraph";
import ButtonDeleteAllParagraphs from "./button-delete-all-paragrapha";
import { ListOfParagraphs } from "./list-of-paragraphs";
import ButtonAiCreateSingleChapterParagraphs from "../button-ai-create-single-chapter-paragraphs ";
import { BreadcrumbResponsive } from "@/components/breadcrumb-responsive";

interface PageProps {
  params: Promise<{ chapterSlug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { chapterSlug } = await params;
  const slug = decodeURIComponent(chapterSlug);
  const chapter = await getChapterBySlug(slug);
  if (!chapter) return notFound();
  const bibleStudy = chapter.bibleStudy;
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <BreadcrumbResponsive items={[
        {label:'Bible studies',href:'/bible-study'},
        {label:bibleStudy?.name!,href:`/bible-study/${bibleStudy?.slug}`},
        {label:chapter.title!,href:`/bible-study/${bibleStudy?.slug}/${chapter.slug}`},
      ]} 
                  ITEMS_TO_DISPLAY={3}/>
            
      {/* headings  */}
      <Heading1 title={bibleStudy?.name!} className="uppercase">
        {/* TODO: implement authorization  */}
        <ButtonAddEditBibleStudy
          bibleStudyToEdit={bibleStudy!}
          variant={"ghost"}
        >
          <Edit3Icon />
        </ButtonAddEditBibleStudy>
        <ButtonDeleteBibleStudy
          bibleStudyToDelete={bibleStudy!}
          variant={"ghost"}
        >
          <Trash2Icon />
        </ButtonDeleteBibleStudy>
      </Heading1>
      {/* TODO: if admin, do not obscure intro title  */}
      <Heading2
        title={
          chapter.title.toLocaleLowerCase().includes("intro")
            ? "Introduction"
            : chapter.title
        }
        className="uppercase"
      >
        {/* TODO: implement authorization  */}
        <ButtonAddEditChapter
          chapterToEdit={chapter}
          bibleStudy={bibleStudy!}
          variant={"ghost"}
        >
          <Edit3Icon />
        </ButtonAddEditChapter>
        <ButtonDeleteChapter chapterToDelete={chapter} variant={"ghost"}>
          <Trash2Icon />
        </ButtonDeleteChapter>
        <Separator orientation="vertical" />
        <ButtonAddEditParagraph
          variant={"outline"}
          size={"icon"}
          chapter={chapter}
          title="Add new paragraph"
        >
          <PlusIcon />
        </ButtonAddEditParagraph>
<ButtonAiCreateSingleChapterParagraphs bibleStudyId={bibleStudy?.id!} chapterSlug={chapter.slug} variant={"outline"} size={"icon"}>
  <StarsIcon/>
</ButtonAiCreateSingleChapterParagraphs>
        <ButtonDeleteAllParagraphs
          chapterWithParagraphs={chapter}
          variant={"outline"}
          size={"icon"}
          disabled={!chapter.paragraphs.length}
          title="Delete all paragraphs"
        >
          <TrashIcon />
        </ButtonDeleteAllParagraphs>
      </Heading2>

      {/* content  */}
      <ListOfParagraphs chapter={chapter} />
    </div>
  );
}
