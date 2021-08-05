//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, Platform,StatusBar,Dimensions } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

export default function App() {
  console.log(Dimensions.get("screen"));
  console.log(useDimensions())
  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{ 
              backgroundColor: 'dodgerblue',
              width:"100%",
              height:landscape ? '100%' : '30%',
              }}>
          
        <Text>Test!</Text>
        <Button title="Click ME"/ >
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 0,
  },
});
