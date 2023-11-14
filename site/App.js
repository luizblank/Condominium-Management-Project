import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastro';
import Login from './Login';
import Homepage from './Homepage';
import HomepageAdm from './HomepageAdm';
import Boleto from './Boleto';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "HomepageAdm" component = {HomepageAdm} 
          options = {{headerStyle: {backgroundColor: '#18191a', 
                                    borderBottomColor: '#fff'},
                      headerTintColor: '#fff'}}/>
          <Stack.Screen name = "Homepage" component = {Homepage} 
          options = {{headerStyle: {backgroundColor: '#18191a', 
                                    borderBottomColor: '#fff'},
                      headerTintColor: '#fff'}}/>
          <Stack.Screen name = "Boleto" component = {Boleto} 
          options = {{headerStyle: {backgroundColor: '#18191a', 
                                    borderBottomColor: '#fff'},
                      headerTintColor: '#fff'}}/>
          <Stack.Screen name = "Cadastro" component = {Cadastro} 
          options = {{headerStyle: {backgroundColor: '#18191a', 
                                    borderBottomColor: '#fff'},
                      headerTintColor: '#fff'}}/>
          <Stack.Screen name = "Login" component = {Login} 
          options = {{headerStyle: {backgroundColor: '#18191a', 
                                    borderBottomColor: '#fff'},
                      headerTintColor: '#fff'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}