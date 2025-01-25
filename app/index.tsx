import {StyleSheet } from 'react-native';
import {View} from "tamagui";
import TodoList from "@/components/templates/TodoList";

export default function Index() {
  return (
      <View style={styles.wrapper}>
        <TodoList />
      </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
