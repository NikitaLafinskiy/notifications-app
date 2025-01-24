import {Button, Form, H4, Input, Label, Spinner, Text} from 'tamagui'
import {useState} from "react";
import {StyleSheet} from "react-native";
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';

export default function TodoForm() {
    const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')
    const [date, setDate] = useState(new Date(1598051730000));

    const handleSubmit = () => {
        setStatus('submitting')
    }

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
        setDate(selectedDate || date!);
    };

    return <Form
        onSubmit={() => setStatus('submitting')}
        style={styles.form}
        >
            <H4>Create a Todo</H4>
            <Label htmlFor="todo">
                Todo:
            </Label>
            <Input style={styles.input} id="todo" placeholder="I want to water my plants!" />

            <Label htmlFor="deadline">
                Deadline:
            </Label>
            <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'datetime'}
                    onChange={onChange}
            />

            <Form.Trigger asChild disabled={status !== 'off'}>
                <Button style={styles.button} icon={status === 'submitting' ? () => <Spinner /> : undefined}>
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
        borderRadius: 16,
        borderColor: "#eee",
        backgroundColor: "black",
        marginBottom: 100
    },
    input: {
        width: "80%"
    },
    button: {
        marginTop: 10,
    }
})