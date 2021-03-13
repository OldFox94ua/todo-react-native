import React, {useState} from 'react'
import {View, StyleSheet, TextInput,  Button, Alert} from 'react-native'


export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const presHandler = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Назва не може бути пустим')
        }   
    }

    return(
        <View style={styles.block}>
           <TextInput 
           style={styles.input}
           onChangeText={setValue}
           value = {value}
           placeholder="Введіть, що запланували..."
           />
            <Button  title='Додати' onPress={presHandler} />
        </View>
    )
}








const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15

    },
    input: {
        width: '75%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 10
    }
})