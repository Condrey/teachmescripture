import { BibleStudyData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteChapter, upsertChapter } from "./action";

export function useUpsertChapterMutation(slug: string) {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ["chapters", slug];

  const mutation = useMutation({
    mutationFn: upsertChapter,
    async onSuccess(data, variables) {
      await queryClient.cancelQueries({ queryKey });
      if (!variables.id) {
        toast.success(
          `Successfully created a new chapter called ${variables.title}`
        );
      } else {
        toast.success(`Successfully updated ${variables.title} chapter`);
      }

      queryClient.invalidateQueries({ queryKey });
    },
    onError(error, variables) {
      console.error(error);
      toast.error(
        `Failed to ${variables.id ? "update" : "create new"} ${
          variables.title
        } chapter. Please try again`
      );
    },
  });
  return mutation;
}

export function useDeleteChapterMutation(slug: string) {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ["chapters", slug];

  const mutation = useMutation({
    mutationFn: deleteChapter,
    async onSuccess(data, variables) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<BibleStudyData[]>(queryKey, (oldData) => {
        if (!oldData) {
          queryClient.invalidateQueries({ queryKey: ["chapters"] });
          return;
        }

        toast.success(
          `Successfully deleted ${data.title} chapter from the database`
        );
        queryClient.invalidateQueries({ queryKey });

        return oldData.filter((d) => d.id !== data.id);
      });
    },
    onError(error, variables) {
      console.error(error);
      toast.error(
        `Failed to delete this chapter from the database. Please try again`
      );
    },
  });
  return mutation;
}
