import {FlatList, StyleSheet} from "react-native";
import {useTypedSelector} from "@/store/hooks/useTypedSelector";
import {useState} from "react";
import SearchBar from "@/components/modules/SearchBar";
import Todo from "@/components/modules/Todo";
import EmptyTodoFallback from "@/components/modules/EmptyTodoFallback";
import {sortTodos} from "@/utils/sortTodos";

export default function TodoList() {
    const todoState = useTypedSelector(state => state.todo)
    const [searchParam, setSearchParam] = useState('')

    const filteredTodos = todoState.todos.filter(todo => {
        return todo.content.toLowerCase().includes(searchParam.toLowerCase())
    }).sort(sortTodos)
    const isEmpty = filteredTodos.length <= 0;

    const handleChangeText = (text: string) => {
        setSearchParam(text)
    }

    return <FlatList
        keyExtractor={(item, index) => item.id.toString() || index.toString()}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        data={filteredTodos}
        renderItem={({item}) => {
            return <Todo todo={item}/>
        }}
        ListEmptyComponent={<EmptyTodoFallback/>}
        ListHeaderComponent={isEmpty ? null: <SearchBar searchParam={searchParam} onChangeText={handleChangeText}/>}
        stickyHeaderIndices={isEmpty ? [] : [0]}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "85%"
    },
    contentContainerStyle: {
      justifyContent: "center",
      width: "100%",
      padding: 10,
      gap: 5,
      paddingBottom: 20,
    }
})