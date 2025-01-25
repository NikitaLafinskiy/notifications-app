import {registerForPushNotificationsAsync} from "@/utils/registerForPushNotificationsAsync";
import {Alert} from "react-native";
import * as Notifications from "expo-notifications";
import {SchedulableTriggerInputTypes} from "expo-notifications";
import {isAfter} from "date-fns";

export const scheduleNotificationAsync = async ({content, deadline}: {content: string, deadline: Date}): Promise<string | undefined> => {
    const status = await registerForPushNotificationsAsync()
    if (isAfter(
        deadline,
        new Date())) {
        if (status !== "granted") {
            Alert.alert("Notifications have been disabled by the user. Please enable them in the app settings.")
        } else {
            return await Notifications.scheduleNotificationAsync({
                content: {
                    body: content,
                },
                trigger: {
                    type: SchedulableTriggerInputTypes.DATE,
                    date: deadline
                }
            })
        }
    } else {
        Alert.alert("The deadline has passed.")
    }
}