import React, {useState, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

interface FlatButtonProps{
   onPressEvent: () => void;
   buttonText: string;
}

const FlatButton: React.FC<FlatButtonProps> = props => {

    return(
        <View>
           <TouchableOpacity onPress={props.onPressEvent}>
                <View style={styles.buttonStyle} >
                    <Text style={styles.buttonText}>{props.buttonText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle:{
        borderRadius: 30,
        paddingVertical: 12, 
        paddingHorizontal: 30,
        width:170,
        alignSelf:'center',
        backgroundColor:'#4169e1',
        margin:10
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22, 
        textAlign: 'center'
    }
})

export default FlatButton;