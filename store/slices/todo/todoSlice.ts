import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Todo = {
    id: number,
    content: string,
    completedAt: string | null,
    deadline: string,
    notificationId: string | null,
}

type TodoState = {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state: TodoState, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        toggleCompletion: (state: TodoState, action: PayloadAction<Todo>) => {
            const currentTodo = state.todos.find((todo) => todo.id === action.payload.id)!
            currentTodo.completedAt = currentTodo.completedAt ? null : new Date().toISOString()
            currentTodo.notificationId = action.payload.notificationId;
        }
    }
})

export const todoReducer = todoSlice.reducer
export const todoActions = todoSlice.actions