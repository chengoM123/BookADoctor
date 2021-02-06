import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, KeyboardType } from 'react-native';

interface TextInputProps{
    placeHolderText: string;
    secureTextEntry: boolean;
    keyboardType: KeyboardType;
}


const TextInp: React.FC<TextInputProps> = props => {
    const [input, setInput] = useState<string>('');
    return(
        <View>
            <TextInput 
                style={styles.inputStyle}
                placeholder= {props.placeHolderText}
                autoCorrect={false}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor='#808080'
                keyboardType={props.keyboardType}
                onChangeText={newInput => setInput(newInput)}
                value={input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        borderColor: '#808080',
        backgroundColor: '#dcdcdc',
        padding: 8,
        marginTop:20,
        width:180,
        alignSelf:'center',
    }
})

export default TextInp;