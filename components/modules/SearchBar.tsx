import {Input, View} from "tamagui";
import {StyleSheet} from "react-native";

type SearchBarProps = {
    onChangeText: (text: string) => void;
    searchParam: string;
}

export default function SearchBar({searchParam, onChangeText}: SearchBarProps) {
    return <View style={styles.container}>
        <Input
            style={styles.input}
            onChangeText={onChangeText}
            keyboardType={"default"}
            value={searchParam}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        flex: 1
    }
})