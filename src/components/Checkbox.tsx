import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface CheckboxProps{
    text: string;
    val: boolean;
}


const Checkbox: React.FC<CheckboxProps> = props => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

    return(
        <View style={styles.viewStyle}>
            <CheckBox style={styles.checkboxStyle}
                      value={props.val}
                      onValueChange={newCheck => setIsCheck(newCheck)} />
            <Text style={styles.checkboxTextStyle} > {props.text} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection: 'row',
        alignSelf: 'center'
    },
    checkboxStyle:{
        alignSelf:'flex-end'
    },
    checkboxTextStyle:{
        fontSize:15,
        textAlign:'right',
        marginTop:5
    }
})

export default Checkbox;