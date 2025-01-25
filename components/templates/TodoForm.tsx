import {Button, Form, H4, Input, Label, Spinner} from 'tamagui'
import {StyleSheet} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {useAppDispatch} from "@/store/hooks/useAppDispatch";
import {Todo, todoActions} from "@/store/slices/todo/todoSlice";
import {useRouter} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import {todoSchema} from "@/validators/todoDataValidator"
import {globalTheme} from "@/const/globalTheme";

export default function TodoForm() {
    const {control, handleSubmit, formState: {isSubmitting}} = useForm<z.infer<typeof todoSchema>>({
        defaultValues: {
          content: '',
          date: new Date(),
        },
        resolver: zodResolver(todoSchema)
    })

    const dispatch = useAppDispatch();
    const router = useRouter();

    const onSubmit = (data: z.infer<typeof todoSchema>) => {
        const todo: Todo = {
            id: Date.now(),
            completedAt: null,
            content: data.content,
            deadline: data.date.toISOString()
        }
        dispatch(todoActions.addTodo(todo))
        router.replace("/")
    }

    return <Form
        onSubmit={handleSubmit(onSubmit)}
        style={styles.form}
        >
            <H4>Create a Todo</H4>
            <Label htmlFor="todo">
                Todo:
            </Label>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => {
                    return <Input
                              value={value}
                              onChangeText={onChange}
                              onBlur={onBlur}
                              style={styles.input}
                              id="todo"
                              placeholder="I want to water my plants!" />
            }} name={"content"} />

            <Label htmlFor="deadline">
                Deadline:
            </Label>
            <Controller
                control={control}
                render={({field: {onChange, value}}) => {
                    return <DateTimePicker
                        testID="dateTimePicker"
                        value={value}
                        mode={'datetime'}
                        onChange={(event, selectedDate) => onChange(selectedDate || value)}
                    />
            }} name={"date"} />

            <Form.Trigger asChild disabled={isSubmitting}>
                <Button style={styles.button} icon={isSubmitting ? () => <Spinner /> : undefined}>
                    Create
                </Button>
            </Form.Trigger>
        </Form>
}

const styles = StyleSheet.create({
    form: {
        gap: 8,
        alignItems: "flex-start",
        width: "80%",
        padding: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: globalTheme.borderColor,
        backgroundColor: globalTheme.backgroundColor,
        marginBottom: 100
    },
    input: {
        width: "80%"
    },
    button: {
        marginTop: 10,
    }
})