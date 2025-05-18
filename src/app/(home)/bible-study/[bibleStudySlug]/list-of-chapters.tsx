"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { BibleStudyData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { RefreshCcwIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { getBibleStudyBySlug } from "./action";
import ButtonAddEditChapter from "./button-add-edit-chapter";
import { useChapterColumns } from "./columns";

interface ListOfChaptersProps {
  bibleStudy: BibleStudyData;
}

export function ListOfChapters({ bibleStudy }: ListOfChaptersProps) {
  const query = useQuery({
    queryKey: ["chapters", bibleStudy.slug],
    queryFn: async () => getBibleStudyBySlug(bibleStudy.slug),
    initialData: bibleStudy,
  });

  const { data, status, refetch, isFetching } = query;
  if (status === "error")
    return (
      <ErrorContainer
        errorMessage={`Failed to fetch ${bibleStudy.name} bible series chapters. Please try again!`}
        query={query}
      />
    );
  if (status === "success" && !data) return notFound();
  if (status === "success" && !data?.chapters.length)
    return (
      <EmptyContainer
        message={`There are no chapters added to ${bibleStudy.name} bible series yet. Please add!`}
      >
        <ButtonAddEditChapter variant={"secondary"}>
          Click to add
        </ButtonAddEditChapter>
      </EmptyContainer>
    );
  return (
    <DataTable
      data={data?.chapters!}
      columns={useChapterColumns}
      filterColumn={{ id: "title" }}
    >
      {/* TODO: implement authorization */}
      <ButtonAddEditChapter variant={"secondary"} bibleStudy={bibleStudy}>Add new</ButtonAddEditChapter>
      <Button onClick={() => refetch()} size={"icon"} variant={"ghost"}>
        <RefreshCcwIcon className={cn(isFetching && "animate-spine")} />
      </Button>
    </DataTable>
  );
}
