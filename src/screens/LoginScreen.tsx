
import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import AppDescription from '../components/AppDescroption';
import TextInp from '../components/TextInp';
import Checkbox from '../components/Checkbox';
import FlatButton from '../components/FlatButton';

const LogginScreen = () =>{

    const makeLogin =()=>{}

    return(
        <View style={styles.viewStyle}>
            <AppDescription/>
            <TextInp placeHolderText={"Email"} secureTextEntry={false} keyboardType={"email-address"}/>
            <TextInp placeHolderText={"Password"} secureTextEntry={true} keyboardType={"default"}/>
            <Text style={styles.passwordStyle}>At least 6 characters</Text>
            <Checkbox text={"I am a patient"} val={true}/>
            <Checkbox text={"I am a doctor"} val={false}/>
            <FlatButton buttonText={"Login"} onPressEvent={makeLogin}/>
            <Image style={styles.imageStyle} source={require('../../assets/doctor.png')}/>
        </View>
      );

}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor: '#87cefa'
    },
    passwordStyle:{
        alignSelf:'center',
        fontSize:10,
        marginBottom:10
    },
    imageStyle:{
        width: 300,
        height: 300,
        left:120
    },
})
export default LogginScreen;
