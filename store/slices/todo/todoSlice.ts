import {createSlice} from "@reduxjs/toolkit";

type Todo = {
    id: number,
    content: string,
    completedAt: Date | null
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
    }
})

export const todoReducer = todoSlice.reducer
export const todoActions = todoSlice.actions