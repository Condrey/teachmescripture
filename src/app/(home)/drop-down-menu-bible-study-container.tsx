import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BibleStudy } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import {
  ArrowUpRightIcon,
  Edit3Icon,
  MoreHorizontalIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { DialogDeleteBibleStudy } from "./button-delete-bible-study";
import FormAddEditBibleStudy from "./form-add-edit-bible-study";
import FormAddEditChapter from "./bible-study/[bibleStudySlug]/form-add-edit-chapter";
import LoadingButton from "@/components/loading-button";

interface DropDownMenuPropsBibleStudyContainerProps {
  bibleStudy: BibleStudy;
  maxQuantity?: number;
}
export default function DropDownMenuBibleStudyContainer({
  bibleStudy,
  maxQuantity,
}: DropDownMenuPropsBibleStudyContainerProps) {
  // TODO: Perform authentication

  const { getNavigationLinkWithPathnameWithoutUpdate } =
    useCustomSearchParams();
const [isPending, startTransition] = useTransition();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddChapterDialog, setOpenAddChapterDialog] = useState(false);


  const url = getNavigationLinkWithPathnameWithoutUpdate(
    "/bible-study/" + bibleStudy.slug
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
            <DropdownMenuItem onClick={()=>startTransition(()=>{})} asChild>
              <Link href={url}>
                <ArrowUpRightIcon /> View bible study series
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenEditDialog(true)}
              className=" capitalize w-full justify-start"
            >
              <Edit3Icon /> Edit bible study series
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenDeleteDialog(true)}
              className=" capitalize w-full justify-start"
            >
              <Trash2Icon /> Delete bible study series
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup className="text-muted-foreground">
            <DropdownMenuLabel>Secondary actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem  onClick={() => setOpenAddChapterDialog(true)}
              className=" capitalize w-full justify-start">
              <PlusIcon /> Create a new chapter
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <FormAddEditBibleStudy
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        bibleStudyToEdit={bibleStudy}
        maxQuantity={maxQuantity}
      />
      <DialogDeleteBibleStudy
        bibleStudy={bibleStudy}
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        maxQuantity={maxQuantity}
      />
      {/* Secondary action  */}
      <FormAddEditChapter open={openAddChapterDialog} setOpen={setOpenAddChapterDialog} bibleStudy={bibleStudy} />
    </>
  );
}
