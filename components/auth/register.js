import React, { Component } from 'react';
import {StyleSheet,Text,View, Button, TextInput} from 'react-native'
import firebase from 'firebase'
export class  register extends Component {
constructor(props){
    super(props);
    this.state={
        email:'',
        password: '',
        name: ''
    }
    this.onSighnUP = this.onSighnUP.bind(this)
}

onSighnUP(){
    const { email, name, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result)=>
        {
            console.log(result)
        })
        .catch((err)=>
        {
            console.log(err)
        })


}

    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'white',  
                justifyContent : 'center'            
                       
                       }}>      
              
        
                    <Text style={{ 
                    fontFamily:'Pacifico_400Regular' ,
                    textAlign: 'center', // <-- the magic                    
                    fontSize: 30,
                    marginTop: 0,}}  >New User 
                    </Text>
                    
                    <TextInput
                        style={styles.input} 
                        placeholder="Email"
                        onChangeText={(email)=> this.setState({email})}
                    />
                
                    <TextInput
                        style={styles.input}
                        clearTextOnFocus={true}
                        secureTextEntry={true}
                        placeholder="Password"
                        keyboardType="numeric"
                        onChangeText={(password)=> this.setState({password})}
                    />

                    <TextInput
                        style={styles.input}                        
                        onChangeText={(name)=> this.setState({name})}
                        placeholder="User Name"
                    />
                    <View  style={styles.btn}>
                        <Text     onPress={() => this.onSighnUP()}>Register</Text>
                    </View>
            </View>
        )
    }
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
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor:'#2196F3',     
        alignItems:'center',
        justifyContent:'center'
    }
  });



export default register;