import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Button,
    TouchableOpacity
} from 'react-native';
import Modal from "react-native-modal";
import { DatePickerModal } from 'react-native-paper-dates';
import axios from 'axios';

export default function Reservas() {
    var user = JSON.parse(sessionStorage.getItem("user"));
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    var today = new Date();
    const [date, setDate] = React.useState(new Date(today.setDate(today.getDate() + 1)));
    const [open, setOpen] = React.useState(false);

    async function getInvalidDates() {
        var response = await axios.get('http://localhost:8080/reservation');
        var data = response.data;

        var dates = []
        data.forEach(item => {
            dates.push(new Date(item.date));
        });

        return dates
    }

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

    function getDate(){
        var newDate = (new Date(date.setDate(date.getDate() - 1))).toISOString().substring(0, 10);
        return newDate;
    }

    async function makeReservation() {
        const searchDate = await axios.get("http://localhost:8080/reservation/date/" + getDate());

        if(searchDate.data.length == 0)
        {
            const postReservation = await axios.post("http://localhost:8080/reservation", {
                'cpf': user.cpf,
                'date': getDate()
            });
            window.location.reload(false);
        }
        else
        {
            handleModal()
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Reservas</Text>

            <View style={styles.dateContainer}>
                <Text style={styles.text}>Escolha o dia da sua reserva</Text>
                <TouchableOpacity style={styles.dateButton}
                    onPress={() => setOpen(true)}>
                    <Text>{(new Date(date.setDate(date.getDate() - 1))).toISOString().substring(0, 10)}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.touchContainer}>
                <TouchableOpacity style={styles.touchable}
                    onPress={() => makeReservation()}>
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

            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <View style={styles.modalBox}>
                        <Text style={{ marginBottom: "10px", fontSize: "18px" }}>Já existe uma reserva para esse dia.</Text>
                        <Button color="#242526" title="Ok" onPress={handleModal} />
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
    }
});