import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, TextInput,
  TouchableOpacity, Button
} from 'react-native';
import { useState } from 'react';
import Modal from "react-native-modal";
import axios from 'axios';

export default function Cadastro(props) {
  const [name, setName] = useState('');
  const [numapto, setNumapto] = useState('');
  const [block, setBlock] = useState('')
  const [cellnumber, setCellnumber] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const [modalValue, setModalValue] = useState('');

  async function register() {
    var verify = await verifyValues();
    if (verify != true)
    {
      setModalValue(verify);
      handleModal();
      return;
    }

    await axios.post("http://localhost:8080/user", {
      'name': name,
      'numapto': numapto,
      'block': block,
      'cellnumber': cellnumber,
      'email': email.toLowerCase(),
      'cpf': cpf,
      'adm': false
    });
    window.location.reload(false);
  }

  async function verifyValues() {
    if (name == '' || numapto == '' || block == '' || cellnumber == '' || email == '' || cpf == '')
      return 'Preencha todos os campos!';
    if (email.includes('@') == false)
      return 'Email inválido!';
    if (cpf.replace(/[^a-zA-Z0-9 ]/g, ''))
      return 'CPF inválido!'
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Cadastro de morador</Text>

      <View style={styles.myContainer}>
        <Text style={styles.text}>Nome</Text>
        <TextInput style={styles.textInput} onChangeText = {(text) => setName(text)} />
      </View>

      <View style={styles.myContainer2}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Número Apto</Text>
          <TextInput style={styles.textInput} onChangeText = {(text) => setNumapto(text)} />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Bloco</Text>
          <TextInput style={styles.textInput} onChangeText = {(text) => setBlock(text)} />
        </View>
      </View>

      <View style={styles.myContainer}>
        <Text style={styles.text}>Celular</Text>
        <TextInput style={styles.textInput} onChangeText = {(text) => setCellnumber(text)} />
      </View>

      <View style={styles.myContainer}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.textInput} onChangeText = {(text) => setEmail(text)} />
      </View>

      <View style={styles.myContainer}>
        <Text style={styles.text}>CPF</Text>
        <TextInput style={styles.textInput} onChangeText = {(text) => setCpf(text)} />
      </View>

      <View style={styles.touchContainer}>
        <TouchableOpacity style={styles.touchable}
          onPress = {() => register()}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style = {styles.modal}>
          <View style = {styles.modalBox}>
            <Text style = {{marginBottom: "10px", fontSize: "18px"}}>{modalValue}</Text>
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
