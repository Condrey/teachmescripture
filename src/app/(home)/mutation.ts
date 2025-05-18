import { BibleStudy } from "@/generated/prisma";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteBibleStudySeries, upsertBibleStudySeries } from "./action";
import { BibleStudyData } from "@/lib/types";

export function useUpsertBibleStudiesMutation(maxQuantity?: number) {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ["bible-study-series", maxQuantity];

  const mutation = useMutation({
    mutationFn: upsertBibleStudySeries,
    async onSuccess(data, variables) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<BibleStudyData[]>(queryKey, (oldData) => {
        if (!oldData) {
          queryClient.invalidateQueries({ queryKey: ["bible-study-series"] });
          return;
        }
        if (!variables.id) {
          toast.success(
            `Successfully created a new bible study series called ${variables.name}`
          );
          return [data, ...oldData];
        }
        toast.success(
          `Successfully updated ${variables.name} bible study series`
        );
        return oldData.map((d) => (d.id === data.id ? data : d));
      });
    },
    onError(error, variables) {
      console.error(error);
      toast.error(
        `Failed to ${variables.id ? "update" : "create new"} ${
          variables.name
        } bible study series. Please try again`
      );
    },
  });
  return mutation;
}

export function useDeleteBibleStudiesMutation(maxQuantity?: number) {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ["bible-study-series", maxQuantity];

  const mutation = useMutation({
    mutationFn: deleteBibleStudySeries,
    async onSuccess(data, variables) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<BibleStudyData[]>(queryKey, (oldData) => {
        if (!oldData) {
          queryClient.invalidateQueries({ queryKey: ["bible-study-series"] });
          return;
        }

        toast.success(
          `Successfully deleted ${data.name} bible study series from the database`
        );
        return oldData.filter((d) => d.id !== data.id);
      });
    },
    onError(error, variables) {
      console.error(error);
      toast.error(
        `Failed to delete this bible study series from the database. Please try again`
      );
    },
  });
  return mutation;
}
