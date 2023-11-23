import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, TextInput,
  TouchableOpacity, Button
} from 'react-native';
import { useState } from 'react';
import Modal from "react-native-modal";
import axios from 'axios';

export default function Login(props) {
  if(sessionStorage.length > 0)
  {
    try {
      var user = JSON.parse(sessionStorage.getItem("user"));
      if (user.adm == true)
        props.navigation.navigate("HomeADM");
      else
        props.navigation.navigate("Home");
    } catch (e) {
      console.log("Session Storage empty.")
    }
  }

  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('a');

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  async function verifyLogin() {
    const response = await axios.get("http://localhost:8080/user/cpf/" + cpf);

    if(response.data.length > 0)
    {
      var user = response.data[0];
      if(user.email == email)
      {
        if (user.adm == true)
          props.navigation.navigate("HomeADM");
        else
          props.navigation.navigate("Home");
  
        sessionStorage.setItem("user", JSON.stringify(user));
      }
      else
        handleModal();
    }
    else
      handleModal();
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

      <Modal isVisible={isModalVisible}>
        <View style = {styles.modal}>
          <View style = {styles.modalBox}>
            <Text style = {{marginBottom: "10px", fontSize: "18px"}}>Email ou senha incorretos!</Text>
            <Button color = "#242526" title="Ok" onPress={handleModal} />
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
