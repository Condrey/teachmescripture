"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Project } from "@/generated/prisma";
import { useQuery } from "@tanstack/react-query";
import { getProject } from "./action";
import ButtonAddEditAboutText from "./btn-add-edit-about-text";

interface AboutContentProps {
  project: Project;
}

export default function AboutContent({ project }: AboutContentProps) {
  const query = useQuery({
    queryKey: ["aboutText"],
    queryFn: getProject,
    initialData: project,
  });

  const { data, status } = query;
  return (
    <div>
      {status === "error" ? (
        <ErrorContainer
          query={query}
          errorMessage="Failed to fetch about text. Please try again!"
        />
      ) : status === "success" && !data ? (
        <EmptyContainer
          message={"There is no about text available. Please add!"}
        >
            <ButtonAddEditAboutText  >
                Click to create
            </ButtonAddEditAboutText>
        </EmptyContainer>
      ) : (
        <>
        <ButtonAddEditAboutText project={data!} className="float-end"  >
                Click to create
            </ButtonAddEditAboutText>
        <TipTapViewer content={data?.aboutText || ""} /></>
      )}
    </div>
  );
}
