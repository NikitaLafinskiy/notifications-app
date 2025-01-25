import {AppDispatch} from "@/store/store";
import * as Haptics from 'expo-haptics';
import {Todo, todoActions} from "@/store/slices/todo/todoSlice";
import {scheduleNotificationAsync} from "@/utils/scheduleNotificationAsync";
import * as Notifications from "expo-notifications";

export const toggleTodoCompletion = (todo: Todo) => {
    return async (dispatch: AppDispatch) => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        if (todo.completedAt) {
            const notificationId = await scheduleNotificationAsync({ content: todo.content, deadline: new Date(todo.deadline)})
            console.log("scheduling notification")
            console.log(notificationId)
            if (notificationId) {
                todo.notificationId = notificationId
            }
        } else {
            console.log("canceling notification")
            console.log(todo.notificationId)
            if (todo.notificationId) {
                await Notifications.cancelScheduledNotificationAsync(todo.notificationId)
                todo.notificationId = null
            }
        }
        dispatch(todoActions.toggleCompletion(todo))
    }
}