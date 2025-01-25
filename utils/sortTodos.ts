import {Todo} from "@/store/slices/todo/todoSlice";
import {differenceInDays} from "date-fns";

export const sortTodos = (todo1: Todo, todo2: Todo) => {
    if (todo1.completedAt === null && todo2.completedAt !== null) {
        return -1
    } else if (todo1.completedAt !== null && todo2.completedAt === null) {
        return 1
    } else {
        return differenceInDays(new Date(todo1.deadline), new Date(todo2.deadline))
    }
}