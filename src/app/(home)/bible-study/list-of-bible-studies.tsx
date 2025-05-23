"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { DataTable } from "@/components/ui/data-table";
import { BibleStudyData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getBibleStudySeriesByMaxQuantity } from "../action";
import ButtonAddEditBibleStudy from "../button-add-edit-bible-study";
import { useBibleStudySeriesSchema } from "./columns";
import { toast } from "sonner";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";

interface ListOfBibleStudiesProps {
  bibleStudies: BibleStudyData[];
}

export default function ListOfBibleStudies({
  bibleStudies,
}: ListOfBibleStudiesProps) {
    const {navigateOnclickWithPathnameWithoutUpdate} =useCustomSearchParams()
  const query = useQuery({
    queryKey: ["bible-study-series", undefined],
    queryFn: async () => getBibleStudySeriesByMaxQuantity(undefined),
    initialData: bibleStudies,
  });

  const { status, data } = query;

  return (
    <div>
      {status === "error" ? (
        <ErrorContainer
          errorMessage="Failed to fetch bible study series, please try again."
          query={query}
        />
      ) : status === "success" && !data.length ? (
        <EmptyContainer
          message={
            "There are no bible study series in the database yet, please hard."
          }
        >
          <ButtonAddEditBibleStudy variant={"secondary"}>
            Click to create
          </ButtonAddEditBibleStudy>
        </EmptyContainer>
      ) : (
        <DataTable
          data={data}
          columns={useBibleStudySeriesSchema}
          ROWS_PER_TABLE={10}
          filterColumn={{ id: "name" }}
        //   TODO: handle click when not admin
        //   handleClick={({id,slug})=>{
        //     navigateOnclickWithPathnameWithoutUpdate('/bible-study/'+slug!)
        //   }

        //   }
        className="w-full"
        >
          {/* TODO: view by authorization */}
          <ButtonAddEditBibleStudy variant={'default'}>Add new</ButtonAddEditBibleStudy>
        </DataTable>
      )}
    </div>
  );
}
