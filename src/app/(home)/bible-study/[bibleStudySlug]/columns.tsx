"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { ChapterData } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import DropDownMenuChapterContainer from "./drop-down-menu-chapter-container";
import ButtonViewChapter from "./button-view-chapter";
import { ArrowUpRightIcon, MoveUpRightIcon } from "lucide-react";

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
      <DataTableColumnHeader column={column} title="Chapter" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="font-semibold capitalize">{row.original.title}</div>
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
  },
  {
    id: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Perform action" />
    ),
    cell: ({ row }) => {
      // TODO: implement authentication
      return <div className="flex gap-2.5">
        <ButtonViewChapter chapter={row.original} size={'sm'} variant={'secondary'}>
            <ArrowUpRightIcon/>
        </ButtonViewChapter>
        <DropDownMenuChapterContainer chapter={row.original} />
      </div>;
    },
  },
];
