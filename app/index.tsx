import { StyleSheet } from 'react-native';
import {View} from "tamagui";
import TodoList from "@/components/templates/TodoList";

export default function Index() {
  return (
      <View style={styles.container}>
        <TodoList/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
