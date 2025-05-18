import { Heading2 } from "@/components/title";
import { getBibleStudySeriesByMaxQuantity } from "../action";
import ListOfBibleStudies from "./list-of-bible-studies";
import { Metadata } from "next";

export const metadata:Metadata={
    title:'Bible study series'
}
export default async function Page() {
  const bibleStudies = await getBibleStudySeriesByMaxQuantity();

  return (
    <div>
      <Heading2 title={`All bible study series`} className=" capitalize" />
      <ListOfBibleStudies bibleStudies={bibleStudies}/>
    </div>
  );
}
