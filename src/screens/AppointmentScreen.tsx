
import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import FlatButton from '../components/FlatButton';
import Doctor from '../Entities/Doctor';
import DoctorsFlatList from '../components/DoctotsFlatList';
import WaitingListForPatients from '../components/WaitingListForPatients'
import Appointment from '../Entities/Appointment';

const AppointmentScreen = () =>{

    const [appointmentsList, setAppointmentsList] = useState<Appointment[]>([]);
    const cancelAppointment = () =>{}
    
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Dear  __,</Text>
            <Text style={styles.titleStyle}>you have an appointment with</Text>
            <Text style={styles.titleStyle}>Dr ___.</Text>
            <Text style={styles.subtitleStyle}>Waiting List:</Text>
            <WaitingListForPatients appointmentsList={appointmentsList}/>
            <Text style={styles.cancelDesStyle}>You have the option to cancel your appointment as long as you have not yet received a notification that your appointment has arrived, and the doctor is waiting for you</Text>
            <FlatButton buttonText={"Cancel"} onPressEvent={cancelAppointment}/>
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
      cancelDesStyle:{
        textAlign:'center',
        fontSize:15,
    },
})
export default AppointmentScreen;
