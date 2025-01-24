import {Text} from "tamagui";
import {StyleSheet} from "react-native";

export default function EmptyTodoFallback() {
    return <Text style={styles.text}>No todos.</Text>
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
    }
})