import { Heading2 } from "@/components/title";
import { getBibleStudySeriesByMaxQuantity } from "../action";
import ListOfBibleStudies from "./list-of-bible-studies";
import { Metadata } from "next";
import { BreadcrumbResponsive } from "@/components/breadcrumb-responsive";

export const metadata:Metadata={
    title:'Bible study series'
}
export default async function Page() {
  const bibleStudies = await getBibleStudySeriesByMaxQuantity();

  return (
    <div className="w-full max-w-4xl  mx-auto space-y-6 ">
      <BreadcrumbResponsive items={[{label:'Bible studies',href:'/bible-study'}]} ITEMS_TO_DISPLAY={1}/>
      <Heading2 title={`All bible study series`} className=" capitalize" />
      <ListOfBibleStudies bibleStudies={bibleStudies}/>
    </div>
  );
}
