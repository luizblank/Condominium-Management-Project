import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, TextInput,
  TouchableOpacity, Button
} from 'react-native';
import { useState } from 'react';
import axios from 'axios';

const response = await axios.get("http://localhost:8080/user");

export default function App(props) {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  function verifyLogin() {
    var data = response.data;
    var user;

    for (var i = 0; i < data.length; i++)
      if (data[i].email == email)
        user = data[i];

    console.log(user);
    if (user.adm == true)
      props.navigation.navigate("HomepageAdm");
    else
      props.navigation.navigate("Homepage");

    sessionStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Login do morador</Text>

      <View style={styles.myContainer}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.textInput} onChangeText = {text => setEmail(text)}/>
      </View>

      <View style={styles.myContainer}>
        <Text style={styles.text}>CPF</Text>
        <TextInput style={styles.textInput} onChangeText = {text => setCpf(text)} />
      </View>

      <View style={styles.touchContainer}>
        <TouchableOpacity style={styles.touchable}
          onPress = {() => verifyLogin()}>
          <Text>Login</Text>
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
