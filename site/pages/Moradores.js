import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';

export function ShowBoxesprops() {
    const [moradores, setMoradores] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:8080/morador");
                setMoradores(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return moradores.map((morador, index) => (
        <View key={index}>
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
                <View style={styles.box}>
                    <Text style={styles.boxText}>Reservar churrasqueira</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Fazer denúncia</Text>
                </View>
                <View style={styles.box}>
                <Text style={styles.boxText}>Reservar churrasqueira</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Fazer denúncia</Text>
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
    boxContainer: {
        display: 'flex',
        flexDirection: "row",
        marginTop: '10px',
        width: '400px'
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
