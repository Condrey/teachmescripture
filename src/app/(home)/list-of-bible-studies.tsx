"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { MoveRightIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { BibleStudy } from "../../generated/prisma";
import { getBibleStudySeriesByMaxQuantity } from "./action";
import BibleStudyContainer from "./bible-study-container";
import ButtonAddEditBibleStudy from "./button-add-edit-bible-study";
import { BibleStudyData } from "@/lib/types";

interface ListOfBibleStudiesProps {
  bibleStudies: BibleStudyData[];
  maxQuantity: number;
}

export default function ListOfBibleStudies({
  bibleStudies,
  maxQuantity,
}: ListOfBibleStudiesProps) {
  const query = useQuery({
    queryKey: ["bible-study-series", maxQuantity],
    queryFn: async () => getBibleStudySeriesByMaxQuantity(maxQuantity + 1),
    initialData: bibleStudies,
    refetchOnWindowFocus: false,
  });

  const { data, status } = query;
  if (status === "error")
    return (
      <ErrorContainer
        errorMessage="An error occurred while fetching the bible study series."
        query={query}
      />
    );
  if (status === "success" && !data.length)
    return (
      <EmptyContainer
        message={
          "There are no bible study series added in the system yet. Please add!"
        }
      >
        {/* TODO: perform authentication */}

        <ButtonAddEditBibleStudy
          variant={"secondary"}
          maxQuantity={maxQuantity}
        >
          Click to add
        </ButtonAddEditBibleStudy>
      </EmptyContainer>
    );
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-4 ">
        {data.slice(0, maxQuantity).map((bibleStudy) => {
          return (
            <BibleStudyContainer
              key={bibleStudy.id}
              bibleStudy={bibleStudy}
              showImage={false}
            />
          );
        })}
      </div>
      <div className="flex justify-end gap-3 ">
        {/* TODO: perform authentication */}
        <ButtonAddEditBibleStudy variant={"outline"} maxQuantity={maxQuantity}>
          <PlusIcon /> Add new
        </ButtonAddEditBibleStudy>

        {data.length > maxQuantity && (
          <Button
            asChild
            variant={"link"}
            className="hover:no-underline capitalize hover:translate-x-2 transition-all"
          >
            <Link href={`/bible-study`}>
              View all series
              <MoveRightIcon />
            </Link>
          </Button>
        )}
      </div>
    </>
  );
}
