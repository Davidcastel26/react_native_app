import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
//screens
import Home from './screens/Home'
import Details from "./screens/Details";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen  name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;