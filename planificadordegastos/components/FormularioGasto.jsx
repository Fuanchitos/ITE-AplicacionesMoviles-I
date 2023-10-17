import React from 'react'
import { View,Text,SafeAreaView, Pressable, TextInput } from 'react-native'

const FormularioGasto = ({modal, setModal}) => {
  return (
    <SafeAreaView>
        <Text>Desde Formulario Gasto</Text>
        <Pressable onPress={()=>{
            setModal(!modal)
        }}>
            <Text>Cancel</Text>
        </Pressable>
        <View>
            <Text>Nuevo Gasto</Text>
            <View>
                <Text> Nombre del Gasto</Text>
                <TextInput placeholder='Nombre del Gasto'/>
            </View>
            <View>
                <Text> Nombre del Gasto</Text>
                <TextInput placeholder='Nombre del Gasto'/>
            </View>
            <View>
                <Text> Nombre del Gasto</Text>
                <TextInput placeholder='Nombre del Gasto'/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default FormularioGasto