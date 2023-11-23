import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity
} from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';

export default function Reservas() {
    var today = new Date();
    const [cpf, setCpf] = React.useState('');
    const [date, setDate] = React.useState(new Date(today.setDate(today.getDate() + 1)));
    const [open, setOpen] = React.useState(false);

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            setDate(params.date);
        },
        [setOpen, setDate]
    );

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Reservas</Text>

            <View style={styles.myContainer}>
                <Text style={styles.text}>CPF</Text>
                <TextInput style={styles.textInput} onChangeText = {(text) => setCpf(text)} />
            </View>

            <View style={styles.dateContainer}>
                <Text style={styles.text}>Data</Text>
                <TouchableOpacity style={styles.dateButton}
                    onPress={() => setOpen(true)}>
                    <Text>{(new Date(date.setDate(date.getDate() - 1))).toISOString().substring(0, 10)}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.touchContainer}>
                <TouchableOpacity style={styles.touchable}
                    onPress={() => alert('not implemented function')}>
                    <Text>Reservar</Text>
                </TouchableOpacity>
            </View>

            <DatePickerModal
                validRange={{ startDate: new Date() }}
                locale="en"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={new Date(date.setDate(date.getDate() + 1))}
                onConfirm={onConfirmSingle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242526',
        alignItems: 'center',
        justifyContent: 'center',
    },
    myContainer: {
        width: '250px',
        marginBottom: '10px'
    },
    title: {
        color: '#fff',
        fontSize: '28px',
        fontWeight: '500',
        marginBottom: '40px'
    },
    text: {
        color: '#fff',
        alignItems: 'flex-start'
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '3px',
        height: '30px'
    },
    touchContainer: {
        width: '250px',
        marginTop: '3%'
    },
    touchable: {
        innerHeight: '40px',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "10px",
        borderRadius: "5px",
    },
    dateContainer: {
        width: '250px',
    },
    dateButton: {
        innerHeight: '40px',
        backgroundColor: 'white',
        padding: "10px",
        borderRadius: "5px",
    },
});