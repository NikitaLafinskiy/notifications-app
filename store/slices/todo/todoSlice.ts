import {createSlice} from "@reduxjs/toolkit";

type Todo = {
    id: number,
    content: string,
    completedAt: string | null
}

type TodoState = {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: [{id: 1, content: "mytodo", completedAt: null}, {id: 2, content: "mytodo2", completedAt: new Date().toISOString()}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
    }
})

export const todoReducer = todoSlice.reducer
export const todoActions = todoSlice.actions