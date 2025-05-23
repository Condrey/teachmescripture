"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ChapterData } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import DropDownMenuChapterContainer from "./drop-down-menu-chapter-container";
import ButtonViewChapter from "./button-view-chapter";
import { ArrowUpRightIcon, MoveUpRightIcon, StarsIcon } from "lucide-react";
import ButtonAiCreateSingleChapterParagraphs from "./button-ai-create-single-chapter-paragraphs ";

export const useChapterColumns: ColumnDef<ChapterData>[] = [
  {
    id: "index",
    header: ({ column }) => <DataTableColumnHeader column={column} title="#" />,
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        {formatNumber(row.index + 1)}
      </span>
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title= {`Bible Study Series Chapter`} />
    ),
    cell: ({ row }) => (
      <div>
        <div className="font-semibold capitalize line-clamp-1 block max-w-lg text-ellipsis">{row.original.title}</div>
      </div>
    ),
  },
  {
    accessorKey: "bibleStudy.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bible study series" />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground">
          {row.original.bibleStudy?.name}
        </div>
      );
    },
  },{
    accessorKey: "paragraphs",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Paragraphs" />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground">
          {row.original.paragraphs.length}
        </div>
      );
    },
  },
  {
    id: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Perform action" />
    ),
    cell: ({ row }) => {
      const chapter = row.original;
      // TODO: implement authentication
      return <div className="flex gap-2.5">
        <ButtonViewChapter chapter={chapter} size={'sm'} variant={'outline'}>
            <ArrowUpRightIcon/>
        </ButtonViewChapter> <ButtonAiCreateSingleChapterParagraphs chapterSlug={chapter.slug} bibleStudyId={chapter.bibleStudyId!} size={'sm'} variant={'outline'}>
            <StarsIcon />
        </ButtonAiCreateSingleChapterParagraphs>
        <DropDownMenuChapterContainer chapter={chapter} />
      </div>;
    },
  },
];
