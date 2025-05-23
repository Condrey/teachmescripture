import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const tagVariants = cva(
    "flex items-center justify-between rounded-md border ",
    {
        variants:{
            variant: {
                default: "bg-muted border-l-primary text-muted-foreground  dark:border-slate-700 dark:bg-slate-800",
                primary: "bg-primary border-l-primary text-primary-foreground dark:border-slate-700 dark:bg-slate-800",
                secondary: "bg-secondary borer-l-secondary text-secondary-foreground dark:border-slate-700 dark:bg-slate-800",
                destructive: "bg-destructive border-l-destructive text-destructive-foreground   dark:border-slate-700 dark:bg-slate-800",
                outline: "border border-input bg-background text-muted-foreground dark:border-slate-700 dark:bg-slate-800",
            },
            size:{
                default: "border-l-8 p-4",
                sm: "border-l-4 p-2",
                lg: "border-l-8 p-6",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
       
)

export interface TagProps extends VariantProps<typeof tagVariants> {}

function Tag({className,variant,size,...props}:React.ComponentProps<"div">&TagProps) {
    return (
        <div
            className={cn(tagVariants({variant,size,className}))}
            {...props}
       />
    )

}
Tag.displayName = "Tag";

export { Tag, tagVariants }