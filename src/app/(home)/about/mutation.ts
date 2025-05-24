'use client'

import { useMutation } from "@tanstack/react-query"
import { upsertAboutText } from "./action"
import { toast } from "sonner"

export function useUpsertAboutTextMutation(){
    return useMutation({
        mutationFn:upsertAboutText,
        onSuccess: (data, variables, context) => {
            toast.success("About text updated successfully!")
        },
        onError(error, variables, context) {
            toast.error(`Failed to update about text: ${error instanceof Error ? error.message : "Unknown error"}`)
        },
    })
}