import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, Platform,StatusBar,Dimensions  , Image,TouchableOpacity,TextInput} from 'react-native';
import{useFonts,Pacifico_400Regular} from '@expo-google-fonts/pacifico';



function landing({navigation}) {
    let [fontsLoaded, err] = useFonts({
        Pacifico_400Regular
      });
    
      if (!fontsLoaded){
        return null
      }
     

      
    
      return (
        <View style={{
            flex:1,
            backgroundColor:'white'
    
        }}
        
        >
          <View style={{
              flex:1,
              backgroundColor:"white"
          }}/>
          <View style={{
              flex:1,
             
          }}>
    
    <Text style={{ 
        fontFamily:'Pacifico_400Regular' ,
          textAlign: 'center', // <-- the magic
         
          fontSize: 30,
          marginTop: 0,}}  >Toronto PickUp Soccer</Text>
          
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
             <Text     >Log In</Text>
          </View>
    
    
          </View>
          <View style={{
              flex:1,
              justifyContent:'flex-end',
              marginBottom:70
          }}>
            <Text style={styles.txtBtn}>
         Don't have an account? <Text style={styles.txtBtn1} onPress={()=> navigation.navigate('register')}>Sign up.</Text>
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
        justifyContent:'flex-end',
        marginEnd:100,
           
          
        
          
          
        }
        
        
      });

export default landing;