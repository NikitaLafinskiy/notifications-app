import {Todo, todoActions} from "@/store/slices/todo/todoSlice";
import {AppDispatch} from "@/store/store";
import {scheduleNotificationAsync} from "@/utils/scheduleNotificationAsync";

export const createTodo = (todo: Todo) => {
    return async (dispatch: AppDispatch) => {
        const notificationId = await scheduleNotificationAsync({content: todo.content, deadline: new Date(todo.deadline)})
        if (notificationId) {
            todo.notificationId = notificationId
        }
        dispatch(todoActions.addTodo(todo))
    }
}