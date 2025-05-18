import LoadingButton from "@/components/loading-button";
import ResponsiveDrawer from "@/components/responsive-drawer";
import {
  Form,
  FormControl,
  FormField,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  bibleStudySeriesSchema,
  BibleStudySeriesSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit3Icon, PlusCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { BibleStudy } from "../../generated/prisma";
import { useUpsertBibleStudiesMutation } from "./mutation";

interface FormAddEditBibleStudyProps {
  bibleStudyToEdit?: BibleStudy;
  maxQuantity?: number;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function FormAddEditBibleStudy({
  bibleStudyToEdit,
  maxQuantity,
  open,
  setOpen,
}: FormAddEditBibleStudyProps) {
  const form = useForm<BibleStudySeriesSchema>({
    resolver: zodResolver(bibleStudySeriesSchema),
    values: {
      id: bibleStudyToEdit?.id || "",
      name: bibleStudyToEdit?.name || "",
    },
  });
  const { mutate, isPending } = useUpsertBibleStudiesMutation(maxQuantity);
  function submitForm(input: BibleStudySeriesSchema) {
    mutate(input, { onSuccess: () => setOpen(false) });
  }
  return (
    <ResponsiveDrawer
      open={open}
      setOpen={setOpen}
      title={`${
        bibleStudyToEdit ? "Edit This" : "Create New"
      } Bible Study Series`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bible study series</FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter bible study title here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormFooter>
            <LoadingButton loading={isPending}>
              {bibleStudyToEdit ? <Edit3Icon /> : <PlusCircleIcon />}
              <span>{bibleStudyToEdit ? "Update" : "Create"}</span>
            </LoadingButton>
          </FormFooter>
        </form>
      </Form>
    </ResponsiveDrawer>
  );
}
