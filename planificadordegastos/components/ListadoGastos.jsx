import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
  return (
    <View style={styles.contenedor}>
        <Text style={styles.tituto}>Gastos</Text>
        {gastos.length === 0 ? <Text style={styles.textNoGastos}> No hay gastos</Text> : 
        gastos.map(gasto=>(
        //Aqui va un componente
        <Gasto key={gasto.id} gasto={gasto}/>
        ))}
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor:{
        marginVertical: 20,
    },
    tituto:{
        color: '#a09797',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textNoGastos:{
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    }
})

export default ListadoGastos