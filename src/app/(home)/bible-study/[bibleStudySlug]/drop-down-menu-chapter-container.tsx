"use client";

import LoadingButton from "@/components/loading-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { ChapterData } from "@/lib/types";
import {
  ArrowUpRightIcon,
  Edit3Icon,
  MoreHorizontalIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { DialogDeleteChapter } from "./button-delete-chapter";
import FormAddEditChapter from "./form-add-edit-chapter";

interface DropDownMenuPropsChapterContainerProps {
  chapter: ChapterData;
}
export default function DropDownMenuChapterContainer({
  chapter,
}: DropDownMenuPropsChapterContainerProps) {
  // TODO: Perform authentication

  const { getNavigationLinkWithPathnameWithoutUpdate } =
    useCustomSearchParams();
  const [isPending, startTransition] = useTransition();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddChapterDialog, setOpenAddChapterDialog] = useState(false);

  const url = getNavigationLinkWithPathnameWithoutUpdate(
    "/bible-study/" + chapter.slug
  );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className=" z-30">
          <LoadingButton loading={isPending} size={"icon"} variant={"ghost"}>
            <MoreHorizontalIcon />
            <span className="sr-only">Open for more</span>
          </LoadingButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Perform Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild onClick={() => startTransition(() => {})}>
              <Link href={url}>
                <ArrowUpRightIcon />
                View chapter
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenEditDialog(true)}
              className=" capitalize w-full justify-start"
            >
              <Edit3Icon /> Edit chapter
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenDeleteDialog(true)}
              className=" capitalize w-full justify-start"
            >
              <Trash2Icon /> Delete chapter
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <FormAddEditChapter
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        chapterToEdit={chapter}
        bibleStudy={chapter.bibleStudy!}
      />
      <DialogDeleteChapter
        chapter={chapter}
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
      />
    </>
  );
}
