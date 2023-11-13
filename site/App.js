import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastro';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = "Cadastro" component = {Cadastro} 
            options = {{headerStyle: {backgroundColor: '#18191a', 
                                      borderBottomColor: '#fff'},
                        headerTintColor: '#fff'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}