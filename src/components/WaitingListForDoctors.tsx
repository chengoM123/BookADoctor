import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Appointment from '../Entities/Appointment';
import { ListItem, Avatar } from 'react-native-elements';

interface WaitingListForDoctorsProps{
    appointmentsList: Appointment[];
}


const WaitingListForDoctors: React.FC<WaitingListForDoctorsProps> = props => {

    const makeAnAppointment =(item:Appointment)=>{}

    return(
        <View style={styles.viewListStyle}>
            <FlatList 
                    data={props.appointmentsList}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled
                    renderItem={({ item }) => (
                        <ListItem
                            //chevron    
                            onPress={() => {makeAnAppointment(item)}}>
                            <Avatar source={require('../../assets/patient.png')} size={70} />
                            <ListItem.Content>
                                <ListItem.Title>{item.patient.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.patient.id}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewListStyle:{
        width:300, 
        alignSelf:'center',
        margin:25,
        flex:1 
    },
})

export default WaitingListForDoctors;