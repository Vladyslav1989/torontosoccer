import React, { Component } from 'react';
import {View, Button, TextInput} from 'react-native'

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

}

    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'white'
        
            }}
            >
                <TextInput
                 placeholder="Name"
                 onChangeText={(naem)=> this.setState({name})}
                />
                 <TextInput
                 placeholder="Email"
                 onChangeText={(email)=> this.setState({email})}
                />
                 <TextInput
                 placeholder="Password"
                 secureTextEntry={true}
                 onChangeText={(password)=> this.setState({password})}
                />

                <Button 
                onPress={() => this.onSighnUP()}
                title="Sighn Up"
                />

            </View>
        )
    }
}





export default register;