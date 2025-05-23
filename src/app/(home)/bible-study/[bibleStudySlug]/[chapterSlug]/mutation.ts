import { BibleStudyData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteAllParagraphs, deleteParagraph, upsertParagraph } from "./action";

  const queryKey2:QueryKey = ["bible-study-series"]

export function useUpsertParagraphMutation(slug: string) {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ["paragraphs", slug];

  const mutation = useMutation({
    mutationFn: upsertParagraph,
    async onSuccess(data, variables) {
      await queryClient.cancelQueries({ queryKey });
      if (!variables.id) {
        toast.success(
          `Successfully created a new paragraph`
        );
      } else {
        toast.success(`Successfully updated paragraph`);
      }

      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey:queryKey2 });
    },
    onError(error, variables) {
      console.error(error);
      toast.error(
        `Failed to ${variables.id ? "update" : "create new"} paragraph. Please try again`
      );
    },
  });
  return mutation;
}

export function useDeleteParagraphMutation(slug: string) {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ["paragraphs", slug];

  const mutation = useMutation({
    mutationFn: deleteParagraph,
    async onSuccess(data, variables) {
      await queryClient.cancelQueries({ queryKey });
      

        toast.success(
          `Successfully deleted this paragraph from the database`
        );
        queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey:queryKey2 });

   
    },
    onError(error, variables) {
      console.error(error);
      toast.error(
        `Failed to delete this paragraph from the database. Please try again`
      );
    },
  });
  return mutation;
}


export function useDeleteAllParagraphsMutation(slug: string) {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ["paragraphs", slug];

  const mutation = useMutation({
    mutationFn: deleteAllParagraphs,
    async onSuccess(data, variables) {
      await queryClient.cancelQueries({ queryKey });
      

        toast.success(
          `Successfully deleted all paragraphs from the database`
        );
        queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey:['chapters'] });
      queryClient.invalidateQueries({ queryKey:queryKey2 });
   
    },
    onError(error, variables) {
      console.error(error);
      toast.error(
        `Failed to delete all the paragraphs from the database. Please try again`
      );
    },
  });
  return mutation;
}
