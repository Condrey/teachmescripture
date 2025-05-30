import { Heading1, Heading2 } from "@/components/title";
import { notFound } from "next/navigation";
import { getBibleStudyBySlug } from "./action";
import { ListOfChapters } from "./list-of-chapters";
import ButtonAddEditChapter from "./button-add-edit-chapter";
import { PlusIcon } from "lucide-react";
import { BreadcrumbResponsive } from "@/components/breadcrumb-responsive";

interface PageProps {
  params: Promise<{ bibleStudySlug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { bibleStudySlug } = await params;
  const slug = decodeURIComponent(bibleStudySlug);
  const bibleStudy = await getBibleStudyBySlug(slug);

  if (!bibleStudy) return notFound();
  return (
    <div className="w-full max-w-4xl  mx-auto space-y-6  ">
            <BreadcrumbResponsive items={[{label:'Bible studies',href:'/bible-study'},{label:bibleStudy.name,href:`/bible-study/${bibleStudy.slug}`}]} 
            ITEMS_TO_DISPLAY={2}/>
      
      <div className="flex gap-4 items-center justify-between w-full">
        <Heading1 title={bibleStudy.name} className="line-clamp-1 text-ellipsis uppercase" /> 
        <ButtonAddEditChapter className='sm:after:content-["Chapter"]' bibleStudy={bibleStudy}>
          <PlusIcon/> New
        </ButtonAddEditChapter>
      </div>
      <section>
        <Heading2 title="Chapters in the series"/>
        <ListOfChapters bibleStudy={bibleStudy} />
      </section>
    </div>
  );
}
