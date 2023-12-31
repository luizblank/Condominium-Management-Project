import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View,
    TouchableOpacity, Button
} from 'react-native';
import Modal from "react-native-modal";

export default function Homepage(props) {
    var session = JSON.parse(sessionStorage.getItem("user"));

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <View style={styles.myContainer2}>
                    <Text style={styles.title}>Bem vindo { session.name.split(' ')[0] }!</Text>
                </View>
                <View style={styles.myContainer2}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>Apto: { session.numapto } |</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>Bloco: { session.block }</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.buttons}>
                <View style = {styles.touchContainer}>
                    <TouchableOpacity style = {styles.touchable}
                        onPress = {() => props.navigation.navigate("Reservas")}>
                        <Text style={styles.textTouch}>Reservar churrasqueira</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.touchable}
                        onPress = {() => handleModal()}>
                        <Text style={styles.textTouch}>Fazer denúncia</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.touchContainer}>
                    <TouchableOpacity style = {styles.touchable}
                        onPress = {() => props.navigation.navigate("Boleto")}>
                        <Text style={styles.textTouch}>Gerar boleto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.touchable}
                        onPress = {() => handleModal()}>
                        <Text style={styles.textTouch}>Eleições</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <View style={styles.modalBox}>
                        <Text style={{ marginBottom: "10px", fontSize: "18px" }}>Página em desenvolvimento</Text>
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
    },
    text: {
        fontSize: '15px',
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
        display: 'flex',
        flexDirection: "row",
        marginTop: '10px'
    },
    touchable: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderRadius: '5px',
        width: '115px',
        height: '80px',
        marginRight: '10px'
    },
    textTouch: {
        fontWeight: '500',
        alignItems: 'flex-start'
    },
    myContainer2: {
        width: '250px',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: "row",
        marginBottom: "10px"
    },
    innerContainer: {
        marginRight: '10px',
    },
    buttons: {
        marginTop: '1%',
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
