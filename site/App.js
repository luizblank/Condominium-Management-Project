import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import HomepageAdm from './pages/HomepageAdm';
import Boleto from './pages/Boleto';
import Reservas from './pages/Reservas';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomepageAdm" component={HomepageAdm}
          options={{
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff'
          }} />
        <Stack.Screen name="Homepage" component={Homepage}
          options={{
            headerStyle: {
              backgroundColor: '#18191a',
              borderBottomColor: '#fff'
            },
            headerTintColor: '#fff'
          }} />
        <Stack.Screen name="Boleto" component={Boleto}
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
        <Stack.Screen name="Login" component={Login}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}