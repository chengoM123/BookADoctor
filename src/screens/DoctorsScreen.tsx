
import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import Checkbox from '../components/Checkbox';
import Appointment from '../Entities/Appointment';
import WatingListForDoctors from '../components/WaitingListForDoctors';
import FlatButton from '../components/FlatButton';

const DoctorsScreen = () =>{

    const [appointmentsList, setAppointmentsList] = useState<Appointment[]>([]);
    const getNext = ()=>{}
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Hi Dr !</Text>
            <Checkbox text={"Check to be available in the doctors's list"} val={false}/>
            <WatingListForDoctors appointmentsList={appointmentsList}/>
            <FlatButton buttonText={"Get Next"} onPressEvent={getNext}/>
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
export default DoctorsScreen;
