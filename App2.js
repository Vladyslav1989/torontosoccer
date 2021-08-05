//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, Platform,StatusBar,Dimensions  , Image,TouchableOpacity,TextInput} from 'react-native';
import{useFonts,Pacifico_400Regular} from '@expo-google-fonts/pacifico';
import{AppLoading} from 'expo'

export default function App() {

  let [fontsLoaded, err] = useFonts({
    Pacifico_400Regular
  });

  

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      backgroundColor:'white'
      
    }}>


                        {/* 
                  <Image  style={{
                        flex:3,
                        marginBottom:50,
                        marginVertical:30,
                        backgroundColor:'white'
                      
                        
                        
                      }}source={require('./assets/Homepage.jpg')}/>
                  */}  

   
    
     
   <View style={{
     flex:1,
     justifyContent:'center'
     
   }}>
        <Text style={styles.txt}  >Toronto PickUp Soccer</Text>
      
      <TextInput
        style={styles.input}
        
       
        placeholder="Phone number, email or username"
      />
      <TextInput
        style={styles.input}
        clearTextOnFocus={true}
        secureTextEntry={true}
        placeholder="Password"
        keyboardType="numeric"
      />
            <View style={{
     height: 50,
     margin: 12,
     borderColor: 'gray', 
     borderWidth: 1,
     borderRadius: 4,
     backgroundColor:'#2196F3',     
     alignItems:'center',
     justifyContent:'center'
     
     
      }}>
         <Text     onPress={()=> alert('Login')}>Log In</Text>
      </View>
    </View>
     

   
   <View  style={styles.txt2}>
   <Text style={styles.txtBtn}>
     Don't have an account? <Text style={styles.txtBtn1}>Sign up.</Text>
   </Text>
   </View>
  
      
    </View>
   
  );
  }

  const styles = StyleSheet.create({
    input: {
      height: 50,
      margin: 12,
      borderColor: 'gray', 
    	borderWidth: 1,
      borderRadius: 4,
      paddingLeft:20
    },
    btn:{
      height: 50,
      margin: 12,
      borderRadius: 4,
    

    },
    txt:{
      textAlign: 'center', // <-- the magic
     fontWeight: 'bold',
      fontSize: 18,
      marginTop: 0,
     
      
      
    
      
      
    },
    txtBtn:{
      textAlign: 'center', // <-- the magic
     fontWeight: 'bold',
      fontSize: 18,
      marginTop: 0,
      justifyContent:'flex-start',
      color:'grey'
      
    
      
      
    },
    txtBtn1:{
      position:'absolute',
      
      textAlign: 'center', // <-- the magic
     fontWeight: 'bold',
      fontSize: 18,
      marginTop: 0,
      
      color:'#2196F3',   
      
    
      
      
    },
    txt2:{
     flex:1,
    justifyContent:'flex-end'
       
      
    
      
      
    }
    
    
  });