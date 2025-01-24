import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Todo = {
    id: number,
    content: string,
    completedAt: string | null,
    deadline: string
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
        }
    }
})

export const todoReducer = todoSlice.reducer
export const todoActions = todoSlice.actions