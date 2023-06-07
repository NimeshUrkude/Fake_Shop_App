//react
import React from 'react';

//react native
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

//navigation libary
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

//component / page 
import Home from './src/screens/home';
import Product from "./src/screens/Product";

//function
function App(): JSX.Element {

  //navigation type control
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={styles.appDiv}>
      <StatusBar backgroundColor='purple' barStyle='light-content'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ 
            headerTitle: 'Fake Shop',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: 'purple'},
            headerTitleStyle: {color: 'white'}
          }}
        >
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Product" component={Product}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

//css
const styles = StyleSheet.create({
  appDiv: {
    flex: 1
  },
});

export default App;
