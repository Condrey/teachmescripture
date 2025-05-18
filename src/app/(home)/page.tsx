import { Heading1, Heading2 } from "@/components/title";
import { webName } from "@/lib/utils";
import { getBibleStudySeriesByMaxQuantity } from "./action";
import ListOfBibleStudies from "./list-of-bible-studies";

const MAX_QUANTITY = 4;

export default async function Home() {
  const bibleStudies = await getBibleStudySeriesByMaxQuantity(MAX_QUANTITY + 1);
  return (
    <div className="flex flex-col gap-12  w-full mx-auto ">
      <Heading1 title={webName} />

      {/* Bible study series  */}
      <section className="space-y-6 ">
        <Heading2 title="Bible Study series" className="capitalize" />
        <ListOfBibleStudies
          bibleStudies={bibleStudies}
          maxQuantity={MAX_QUANTITY}
        />
      </section>
    </div>
  );
}
