import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, 
    Switch, TouchableOpacity, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.title}>Cadastro de morador</Text>

      <View style = {styles.myContainer}>
        <Text style = {styles.text}>Nome:</Text>
        <TextInput style = {styles.textInput} onChangeText/>
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
    marginBottom: '3%'
  },
  text: {
    color: '#fff',
    alignItems: 'flex-start'
  },
  textInput: {
    backgroundColor:'#fff',
    borderRadius: '5px',
    padding: '3px'
  },
  myContainer: {
    width: '20%',
    marginBottom: '8px'
  },
});
