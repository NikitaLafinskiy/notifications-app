import {Text, View} from "tamagui";

type TodoProps = {
    content: string;
}

export default function Todo({content}: TodoProps) {
    return <View>
        <Text>{content}</Text>
    </View>
}