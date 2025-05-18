'use client'

import LoadingButton from "@/components/loading-button";
import { Button, ButtonProps } from "@/components/ui/button";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { ChapterData } from "@/lib/types";
import Link from "next/link";
import { useTransition } from "react";

interface ButtonViewChapterProps extends ButtonProps {
  chapter: ChapterData;
}

export default function ButtonViewChapter({
  chapter,children,
  ...props
}: ButtonViewChapterProps) {
const {getNavigationLinkWithoutUpdate} = useCustomSearchParams()
const [isPending,startTransition] = useTransition()
const url = getNavigationLinkWithoutUpdate(`/${chapter.slug}`)
  return (

      <LoadingButton loading={isPending} onClick={()=>startTransition(()=>{})}  {...props}>
        <Link href={url}>
        {children}
        </Link>
      </LoadingButton>

  );
}
