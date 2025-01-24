import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import TodoForm from "@/components/templates/TodoForm";
import {StyleSheet} from "react-native";

export default function CreateTodo() {
    return <KeyboardAwareScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
                <TodoForm />
        </KeyboardAwareScrollView>
}

const styles = StyleSheet.create({
    container: {
    },
    contentContainerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})