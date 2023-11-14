import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, 
    TouchableOpacity, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.title}>Cadastro de morador</Text>

      <View style = {styles.myContainer}>
        <Text style = {styles.text}>Nome</Text>
        <TextInput style = {styles.textInput} onChangeText/>
      </View>

      <View style = {styles.myContainer2}>
        <View style = {styles.innerContainer}>
            <Text style = {styles.text}>Número Apto</Text>
            <TextInput style = {styles.textInput} onChangeText/>
        </View>
        <View style = {styles.innerContainer}>
            <Text style = {styles.text}>Bloco</Text>
            <TextInput style = {styles.textInput} onChangeText/>
        </View>
      </View>

      <View style = {styles.myContainer}>
        <Text style = {styles.text}>Celular</Text>
        <TextInput style = {styles.textInput} onChangeText/>
      </View>

      <View style = {styles.myContainer}>
        <Text style = {styles.text}>Email</Text>
        <TextInput style = {styles.textInput} onChangeText/>
      </View>

      <View style = {styles.myContainer}>
        <Text style = {styles.text}>CPF</Text>
        <TextInput style = {styles.textInput} onChangeText/>
      </View>

      <View style = {styles.touchContainer}>
        <TouchableOpacity style = {styles.touchable}
            onPress>
            <Text>Cadastrar</Text>
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
  myContainer2: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px"
  },
  innerContainer: {
    marginRight: "5px",
    marginLeft: "5px",
    width: "120px"
  },
});
