import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button
} from 'react-native';

var session = JSON.parse(sessionStorage.getItem("user"));

export default function App(props) {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.myContainer2}>
                    <Text style={styles.title}>Bem vindo { session.name }!</Text>
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
                        onPress = {() => props.navigation.navigate("Cadastro")}>
                        <Text style={styles.textTouch}>Cadastro de novos moradores</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.touchable}
                        onPress = {() => console.log(session)}>
                        <Text style={styles.textTouch}>Registro de atividades</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.touchContainer}>
                    <TouchableOpacity style = {styles.touchable}
                        onPress = {() => props.navigation.navigate("Reservas")}>
                        <Text style={styles.textTouch}>Reservas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.touchable}
                        onPress>
                        <Text style={styles.textTouch}>Agendamento</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.touchContainer}>
                    <TouchableOpacity style = {styles.touchable}
                        onPress = {() => props.navigation.navigate("Boleto")}>
                        <Text style={styles.textTouch}>Gerar boleto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.touchable}
                        onPress>
                        <Text style={styles.textTouch}>Eleições</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        textAlign: 'center',
        fontWeight: '500',
        justifyContent: 'center'
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
    }
});
