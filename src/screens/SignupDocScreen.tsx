
import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import TextInp from '../components/TextInp';
import FlatButton from '../components/FlatButton';

const SignupDocScreen = () =>{

  const createNewDoctor = () => {
  }

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Sign Up For Doctors:</Text>
            <TextInp placeHolderText={"Full Name"} secureTextEntry={false} keyboardType={"default"}/>
            <TextInp placeHolderText={"Specialization"} secureTextEntry={false} keyboardType={"default"}/>
            <FlatButton buttonText={"SignUp"} onPressEvent={createNewDoctor}/>
            <Image style={styles.imageStyle} source={require('../../assets/doctor.png')}/>
        </View>
      );

}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor: '#87cefa'
    },
    titleStyle:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:30,
        marginTop:60,
        marginBottom:60
      },
    imageStyle:{
        width: 300,
        height: 300,
        left:120
    },
})
export default SignupDocScreen;
