
import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import Checkbox from '../components/Checkbox';
import Doctor from '../Entities/Doctor';
import DoctorsFlatList from '../components/DoctotsFlatList';

const PatientScreen = () =>{

    const [doctorsList, setDoctorsList] = useState<Doctor[]>([]);
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Hi !</Text>
            <Text style={styles.subtitleStyle}>Choose a doctor to make an appointment:</Text>
            <Checkbox text={"Check to sort by availability"} val={false}/>
            <DoctorsFlatList doctorsList={doctorsList}/>
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
        marginBottom:20
      },
      subtitleStyle:{
          textAlign:'center',
          fontSize:18,
      },
})
export default PatientScreen;
