import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Button,
    TouchableOpacity
} from 'react-native';
import Modal from "react-native-modal";
import { DatePickerModal } from 'react-native-paper-dates';
import { useState } from 'react';
import axios from 'axios';

import RNPickerSelect from 'react-native-picker-select';
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)

export default function Reservas() {
    var user = JSON.parse(sessionStorage.getItem("user"));
    const [date, setDate] = React.useState(dateMinus(new Date()));
    const [open, setOpen] = React.useState(false);
    const [schedule, setSchedule] = useState(null);

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const [ErrorModalVisible, setErrorModalVisible] = React.useState(false);
    const handleError = () => setErrorModalVisible(() => !ErrorModalVisible);

    function dateMinus(funcDate) {
        var newDate = new Date(funcDate.setDate(funcDate.getDate() - 1));
        return newDate;
    }

    function dateToString(funcDate) {
        var stringDate = funcDate.toISOString().substring(0, 10);
        return stringDate;
    }

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]
    );

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            setDate(dateMinus(params.date));
        },
        [setOpen, setDate],
    );

    async function makeReservation(funcDate, schedule) {
        if (schedule == null)
        {
            handleError();
            return;
        }

        const searchDate = await axios.get("http://localhost:8080/reservation/type/" + schedule + "/date/" + dateToString(funcDate));

        if (searchDate.data.length == 0) {
            await axios.post("http://localhost:8080/reservation", {
                'cpf': user.cpf,
                'date': dateToString(funcDate),
                'type': schedule
            });
            window.location.reload(false);
        }
        else {
            handleModal()
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Agendamento</Text>

            <View style={styles.myContainer}>
                <Text style={styles.text}>Escolha o tipo do agendamento</Text>
                <RNPickerSelect
                    onValueChange={(value) => setSchedule(value)}
                    items={[
                        { label: 'Assembléia', value: 'Assembleia' },
                        { label: 'Coleta de lixo', value: 'Coleta' },
                    ]}
                />
            </View>

            <View style={styles.dateContainer}>
                <Text style={styles.text}>Escolha o dia do seu agendamento</Text>
                <TouchableOpacity style={styles.dateButton}
                    onPress={() => setOpen(true)}>
                    <Text>{date.toISOString().substring(0, 10)}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.touchContainer}>
                <TouchableOpacity style={styles.touchable}
                    onPress={() => makeReservation(date, schedule)}>
                    <Text>Reservar</Text>
                </TouchableOpacity>
            </View>

            <DatePickerModal
                validRange={{ startDate: new Date() }}
                locale="en-GB"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={date}
                onConfirm={onConfirmSingle}
            />

            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <View style={styles.modalBox}>
                        <Text style={{ marginBottom: "10px", fontSize: "18px" }}>Já existe uma reserva para esse dia.</Text>
                        <Button color="#242526" title="Ok" onPress={handleModal} />
                    </View>
                </View>
            </Modal>

            <Modal isVisible={ErrorModalVisible}>
                <View style={styles.modal}>
                    <View style={styles.modalBox}>
                        <Text style={{ marginBottom: "10px", fontSize: "18px" }}>Selecione um tipo de agendamento.</Text>
                        <Button color="#242526" title="Ok" onPress={handleError} />
                    </View>
                </View>
            </Modal>
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
    modal: {
        flex: 1,
        alignItems: "center"
    },
    modalBox: {
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px"
    },
    pickerInput: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
     },
});