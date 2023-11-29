import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View,
    TouchableOpacity
} from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function ShowBoxes() {
    const [moradores, setMoradores] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:8080/user");
                setMoradores(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    async function deleteUser(id) {
        try {
            await axios.delete("http://localhost:8080/user/delete/" + id);
            setMoradores((prevMoradores) => prevMoradores.filter((morador) => morador.id !== id));
        }
        catch (error) {
            console.error("Erro ao deletar morador.");
        }
    }

    const VerifyUser = props => {
        var user = JSON.parse(sessionStorage.getItem("user"));
        if(props.name == user.id)
        {
            return (
                <View style={styles.myContainer}>
                    <View style={styles.youView}>
                        <Text style={{color:'white'}}>Você</Text>
                    </View>
                </View>
            );
        }
        else
        {
            return (
                <View style={styles.myContainer}>
                    <TouchableOpacity style={styles.touchable}
                        onPress={() => deleteUser(props.name)}>
                        <Text style={{color:'white'}}>Deletar</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    return moradores.map((morador, index) => (
        <View key={index}>
            <View style={styles.box}>
                <Text style={styles.boxText}>Nome: {morador.name}</Text>
                <Text style={styles.boxText}>Bloco: {morador.block}</Text>
                <Text style={styles.boxText}>Nº Apto: {morador.numapto}</Text>
                <VerifyUser name={morador.id}/>
            </View>
        </View>
    ));
}

export default function Condominio(props) {
    var session = JSON.parse(sessionStorage.getItem("user"));

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Moradores</Text>
            <View style={styles.boxContainer}>
                <ShowBoxes />
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
    title: {
        color: '#fff',
        fontSize: '28px',
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: '2%'
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
    myContainer: {
        width: '100%',
        marginTop: 'auto'
    },
    touchable: {
        backgroundColor: 'red',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "5px",
        borderRadius: "5px",
    },
    youView: {
        backgroundColor: 'green',
        color: 'white', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: "5px",
        borderRadius: "5px",
    },
    boxContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "row",
        marginTop: '10px',
        width: '380px'
    },
    box: {
        backgroundColor: 'white',
        alignItems: 'flex-start',
        padding: '10px',
        borderRadius: '5px',
        width: '180px',
        height: '115px',
        margin: '5px'
    },
    boxText: {
        fontWeight: '500',
        alignItems: 'flex-start'
    },
});
