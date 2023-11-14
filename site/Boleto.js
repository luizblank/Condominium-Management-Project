import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.title}>Escaneie o QRCode para gerar o boleto</Text>
      <QRCode
        value = {(Math.random() * 9999999999999999).toString()}
        size = {250}
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
    backgroundColor:'#fff',
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
