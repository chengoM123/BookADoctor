import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Doctor from '../Entities/Doctor';
import { ListItem, Avatar } from 'react-native-elements';

interface DoctorsFlatListProps{
    doctorsList: Doctor[];
}


const DoctorsFlatList: React.FC<DoctorsFlatListProps> = props => {

    const makeAnAppointment =(item:Doctor)=>{}

    return(
        <View style={styles.viewListStyle}>
            <FlatList 
                    data={props.doctorsList}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled
                    renderItem={({ item }) => (
                        <ListItem
                            //chevron    
                            onPress={() => {makeAnAppointment(item)}}>
                            <Avatar source={require('../../assets/doc.png')} size={70} />
                            <ListItem.Content>
                                <ListItem.Title>Dr {item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.specialization}</ListItem.Subtitle>
                                <ListItem.Subtitle>Waiting: {item.waitingCounter.toString()}</ListItem.Subtitle>
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

export default DoctorsFlatList;