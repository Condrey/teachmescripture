"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { Tag } from "@/components/tag";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { FormFooter } from "@/components/ui/form";
import { ChapterData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { Edit2Icon, PlusIcon, TrashIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { getChapterBySlug } from "./action";
import ButtonAddEditParagraph from "./button-add-edit-paragraph";
import ButtonDeleteParagraph from "./button-delete-paragraph";
import { cn } from "@/lib/utils";

interface ListOfParagraphsProps {
  chapter: ChapterData;
}

export function ListOfParagraphs({ chapter }: ListOfParagraphsProps) {
  const query = useQuery({
    queryKey: ["paragraphs", chapter.slug],
    queryFn: async () => getChapterBySlug(chapter.slug),
    initialData: chapter,
  });

  const { data, status, refetch, isFetching } = query;
  if (status === "error")
    return (
      <ErrorContainer
        errorMessage={`Failed to fetch ${chapter.title} bible series paragraphs. Please try again!`}
        query={query}
      />
    );
  if (status === "success" && !data) return notFound();
  if (status === "success" && !data?.paragraphs.length)
    return (
      <EmptyContainer
        message={`There are no paragraphs added to ${chapter.title} bible series chapter yet. Please add!`}
      >
        <ButtonAddEditParagraph variant={"secondary"} chapter={data!}>
          Click to add
        </ButtonAddEditParagraph>
      </EmptyContainer>
    );
  return (
    <div className="space-y-6">
      <div >
        {data?.paragraphs.sort((a,b)=>a.index-b.index).map((paragraph) => {
          const { isTag, line, id,index } = paragraph;
          return (
            <div key={id} className="flex gap-2 items-start">
              {/* TODO: implement authorization */}
              <ButtonAddEditParagraph
                variant={"ghost"}
                size={"icon"}
                chapter={data!}
                paragraphToEdit={paragraph}
                title="Edit this paragraph"
                className="flex-none peer/edit mt-4"
              >
                <Edit2Icon />
              </ButtonAddEditParagraph>

              <ButtonDeleteParagraph
                paragraphToDelete={paragraph}
                variant={"ghost"}
                size={"icon"}
                title="Delete this paragraph"
                className="flex-none peer/delete mt-4"
              >
                <TrashIcon />
              </ButtonDeleteParagraph>
              <div className={cn(" *:text-justify  py-4 px-2 transition-all delay-200 200 ease-in rounded-md flex-1 max-w-3xl w-full mx-auto",
                'peer-hover/edit:bg-secondary  peer-hover/edit:text-secondary-foreground peer-focus:edit:bg-secondary peer-focus/edit:text-secondary-foreground',
                'peer-hover/delete:bg-destructive/20  peer-hover/delete:text-destructive-foreground peer-focus:delete:bg-destructive/20 peer-focus/delete:text-destructive-foreground',
              )}>
                {!isTag ? (
                  <TipTapViewer content={line} />
                ) : (
                  <Tag>
                    <TipTapViewer content={line} />
                  </Tag>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* TODO: implement authorization */}
      <FormFooter>
        <ButtonAddEditParagraph variant={"secondary"} chapter={data!}>
          <PlusIcon />
          Add new paragraph
        </ButtonAddEditParagraph>
      </FormFooter>
    </div>
  );
}
