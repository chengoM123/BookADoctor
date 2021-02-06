import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';


const AppDescroption: React.FC = () => {
    return(
        <View>
            <Text style={styles.titleStyle}>BOOK A DOCTOR</Text>
            <Text style={styles.descriptionStyle}>BOOK A DOCTOR is an application to make</Text>
            <Text style={styles.descriptionStyle}>an appointment with any doctor you want.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:40,
        marginTop:60
    },
    descriptionStyle:{
        textAlign:'center',
        marginTop:10,
    },
})

export default AppDescroption;