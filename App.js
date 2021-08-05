//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';



import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LandingScreen from './components/auth/landing';
import RegisterScreen from './components/auth/register'

import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCghI-9cUqCIr3AS3ioo-RuREYVa9JCmnE",
  authDomain: "torontosoccer-5a585.firebaseapp.com",
  projectId: "torontosoccer-5a585",
  storageBucket: "torontosoccer-5a585.appspot.com",
  messagingSenderId: "693050442631",
  appId: "1:693050442631:web:b2cf428ecf15c088a44922",
  measurementId: "G-43YY8YZ538"
};


  firebase.initializeApp(firebaseConfig)


const Stack = createStackNavigator()
export default function App() {


  

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
