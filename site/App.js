import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import HomepageAdm from './pages/HomepageAdm';
import Boleto from './pages/Boleto';
import Reservas from './pages/Reservas';
import Moradores from './pages/Moradores';
import Agendamento from './pages/Agendamento';

export default function App(props) {
  const Stack = createStackNavigator();
  function logout() {
    sessionStorage.clear();
    window.location.reload(false);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff'
          }} />
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff'
          }} />
        <Stack.Screen name="HomeADM" component={HomepageAdm}
          options={{
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <TouchableOpacity style={styles.touchable}
                onPress = {() => logout()}>
                <Text style = {styles.text}>Logout</Text>
              </TouchableOpacity>
            )
          }} />
        <Stack.Screen name="Home" component={Homepage}
          options={{
            name: "Home",
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <TouchableOpacity style={styles.touchable}
                onPress = {() => logout()}>
                <Text style = {styles.text}>Logout</Text>
              </TouchableOpacity>
            )
          }} />
        <Stack.Screen name="Boleto" component={Boleto}
          options={{
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff'
          }} />
        <Stack.Screen name="Reservas" component={Reservas}
          options={{
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff'
          }} />
        <Stack.Screen name="Moradores" component={Moradores}
          options={{
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff'
          }} />
        <Stack.Screen name="Agendamento" component={Agendamento}
          options={{
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  touchable: {
    innerHeight: '40px',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
    borderRadius: "5px",
    marginRight: "15px"
  },
  text: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#18191a"
  }
});
