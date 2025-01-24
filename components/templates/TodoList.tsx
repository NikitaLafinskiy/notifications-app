import {FlatList, StyleSheet} from "react-native";
import {useTypedSelector} from "@/store/hooks/useTypedSelector";
import {useState} from "react";
import SearchBar from "@/components/modules/SearchBar";
import Todo from "@/components/modules/Todo";
import EmptyTodoFallback from "@/components/modules/EmptyTodoFallback";

export default function TodoList() {
    const todoState = useTypedSelector(state => state.todo)
    const [searchParam, setSearchParam] = useState('')

    const filteredTodos = todoState.todos.filter(todo => {
        return todo.content.toLowerCase().includes(searchParam.toLowerCase())
    })

    const handleChangeText = (text: string) => {
        setSearchParam(text)
    }

    return <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        data={filteredTodos}
        renderItem={(todo) => {
            return <Todo content={todo.item.content}></Todo>
        }}
        ListEmptyComponent={<EmptyTodoFallback/>}
        ListHeaderComponent={todoState.todos.length > 0 ? <SearchBar searchParam={searchParam} onChangeText={handleChangeText}/> : null}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10
    }
})