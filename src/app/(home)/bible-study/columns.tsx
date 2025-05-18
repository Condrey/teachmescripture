"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { BibleStudyData } from "@/lib/types";
import { cn, formatNumber } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import DropDownMenuBibleStudyContainer from "../drop-down-menu-bible-study-container";

export const useBibleStudySeriesSchema: ColumnDef<BibleStudyData>[] = [
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
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bible study series" />
    ),
    cell: ({ row }) => (
      <span className="font-semibold capitalize">{row.original.name}</span>
    ),
  },
  {
    accessorKey: "_count.chapters",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number of chapters" />
    ),
    cell: ({ row }) => {
      const numberOfChapters = row.original._count.chapters;
      return (
        <span className={cn(numberOfChapters === 0 && 'text-muted-foreground italic before:content-["--"] after:content-["--"]')}>
          {numberOfChapters === 0
            ? "No chapters added yet"
            : `${numberOfChapters} chapter${numberOfChapters === 1 ? "" : "s"}`}
        </span>
      );
    },
  },{
    id: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
        
        // TODO: implement authentication 
        return(
      <DropDownMenuBibleStudyContainer bibleStudy={row.original}/>
    )},
  },
];
