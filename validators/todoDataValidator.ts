import {z} from "zod"

export const todoSchema = z.object({
    content: z.string({
        invalid_type_error: "The type is invalid",
        required_error: "Specifying the content of the todo is required"})
        .min(1,
            {
                message: "The content must be at least 1 character long"
            })
        .max(99,
            {
                message: "The content must be at most 99 characters long"
            }),
    date: z.date({
        invalid_type_error: "The type is invalid",
        required_error: "The date has to be specified"
    })
})