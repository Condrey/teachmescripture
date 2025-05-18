import LoadingButton from "@/components/loading-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { BibleStudyData } from "@/lib/types";
import { cn, formatNumber } from "@/lib/utils";
import { DownloadCloudIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import DropDownMenuBibleStudyContainer from "./drop-down-menu-bible-study-container";

interface BibleStudyContainerProps {
  bibleStudy: BibleStudyData;
  maxQuantity?: number;
  showImage?: boolean;
  className?: string;
}
export default function BibleStudyContainer({
  bibleStudy,
  maxQuantity,
  showImage = true,
  className,
}: BibleStudyContainerProps) {
  const {
    name,
    slug,
    imageUrl,
    _count: { chapters: numberOfChapters },
  } = bibleStudy;
  const {
    navigateOnclickWithPathnameWithoutUpdate,
    getNavigationLinkWithPathnameWithoutUpdate,
  } = useCustomSearchParams();
  const [isPending, startTransition] = useTransition();

  const url = getNavigationLinkWithPathnameWithoutUpdate(
    `/bible-study/${slug}`
  );
  // TODO: make the card clickable if not admin 
  return (
    <Card
      className={cn(
        "overflow-clip justify-between ",
        showImage && "pt-0 ",
        "hover:bg-accent hover:text-accent-foreground group/bible-study-container",
        className
      )}
      // onClick={() =>
      //   startTransition(() =>
      //     navigateOnclickWithPathnameWithoutUpdate(`/bible-study/${slug}`)
      //   )
      // }
    >
      {showImage && (
        <CardAction className=" w-full ">
          <Image
            alt={name}
            src={imageUrl!}
            height={300}
            width={400}
            className="bg-contain "
          />
        </CardAction>
      )}
      <CardHeader className="flex flex-row gap-3 justify-between items-start">
        <div className="flex-1 me-auto">
          <CardTitle className="group-hover/bible-study-container:scale-105 transition-all text-lg capitalize tracking-tight line-clamp-2 text-ellipsis">
            {name}
          </CardTitle>
          <CardDescription
            className={cn(numberOfChapters === 0 && "text-destructive")}
          >
            {` ${
              numberOfChapters === 0
                ? "!! Missing"
                : formatNumber(numberOfChapters)
            } chapter${numberOfChapters === 1 ? "" : "s"}`}
          </CardDescription>
        </div>
        <DropDownMenuBibleStudyContainer
          bibleStudy={bibleStudy}
          maxQuantity={maxQuantity}
        />
      </CardHeader>
      <CardFooter className="justify-end  gap-2">
        <LoadingButton loading={isPending}>
          <Link
            href={url}
            className="group-hover/bible-study-container:*:translate-x-1 *:transition-all items-center flex gap-2"
          >
            <span className="group-hover/bible-study-container:scale-105">
              Read
            </span>
            <MoveRightIcon className="" />
          </Link>
        </LoadingButton>
        <Button
          variant={"secondary"}
          className="group/get-btn"
          title="Download as PDF"
        >
          Get{" "}
          <DownloadCloudIcon className="group-hover/get-btn:animate-bounce" />
        </Button>
      </CardFooter>
    </Card>
  );
}
