import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default function App() {
    var opcoes = ['Churrasqueira', 'Piscina', 'Quadra'];
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Reservas</Text>

            <View style={styles.myContainer}>
                <Text style={styles.text}>CPF</Text>
                <TextInput style={styles.textInput} onChangeText />
            </View>

            <View style={styles.myContainer}>
                <Text style={styles.text}>Local</Text>
                <SelectDropdown
                    dropdownStyle = {{height: 'auto'}}
                    buttonStyle={styles.select}
                    defaultButtonText='Selecione uma opção...'
                    data={opcoes}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
            </View>

            <View style={styles.touchContainer}>
                <TouchableOpacity style={styles.touchable}
                    onPress={() => console.log(option)}>
                    <Text>Reservar</Text>
                </TouchableOpacity>
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
    select: {
        width: '250px',
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
});