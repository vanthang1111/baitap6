import React, { Component } from 'react'
import { Text, View , StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default class Signin extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <Text style={{fontWeight: 'bold', fontSize:20, color:'#5FDFFA', marginHorizontal: 10, marginVertical: 40}}>SIGN IN</Text>
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <TextInput
                style={styles.input}
                placeholder='Email or phone number'
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.singup}>
                 <Text style={{color: '#fff', fontWeight: 'bold'}}>Log in</Text>
             </TouchableOpacity>
            <Text  style={{marginVertical: 50}}>OR</Text>
            <TouchableOpacity style={styles.singup}>
                 <Text style={{color: '#fff', fontWeight: 'bold'}}>FACEBOOK LONGIN</Text>
            </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'gray',
        borderRadius: 100,
        width: '80%'
    },
    singup:{
        width: 200,
        height: 50,
        backgroundColor: '#5FDFFA',
        borderColor: '#5FDFFA',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
  });

