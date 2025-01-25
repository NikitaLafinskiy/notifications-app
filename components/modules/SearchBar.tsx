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
            placeholder={"Search..."}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 10
    },
    input: {
        borderRadius: "50%",
        flex: 1
    }
})