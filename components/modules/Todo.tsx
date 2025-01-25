import {ListItem, View} from "tamagui";
import {GestureResponderEvent, LayoutAnimation, Pressable, StyleSheet} from "react-native";
import {Todo as TodoType, todoActions} from "@/store/slices/todo/todoSlice"
import Feather from '@expo/vector-icons/Feather';
import {format} from "date-fns";
import {useAppDispatch} from "@/store/hooks/useAppDispatch";

type TodoProps = {
    todo: TodoType;
}

const dateFormat = "yyyy-MM-dd"

export default function Todo({todo}: TodoProps) {
    const isCompleted = todo.completedAt !== null
    const date = isCompleted ? format(todo.completedAt!, dateFormat)
        : format(todo.deadline, dateFormat);
    const dispatch = useAppDispatch();

    const handleCheck = (e: GestureResponderEvent) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        Haptics.
        dispatch(todoActions.toggleCompletion(todo.id));
    }

    return <View style={styles.container}>
        <ListItem style={[
                styles.item,
                isCompleted ?
                    {
                        opacity: "0.6",
                        backgroundColor: "black",
                    } : null
                ]}
                  hoverTheme
                  iconAfter={() => {
                      return <Pressable hitSlop={24} onPress={handleCheck}>
                          <Feather
                              name={isCompleted ? "check-circle" : "circle"}
                              size={20}
                              color="white" />
                      </Pressable>
                  }}
                  title={todo.content}
                  subTitle={`${isCompleted ? "completed at" : "deadline"}: ${date}`} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        justifyContent: "center",
        width: "100%",
        height: 80,
        padding: 4,
    },
    item: {
        flex: 1,
        borderRadius:10
    }
})