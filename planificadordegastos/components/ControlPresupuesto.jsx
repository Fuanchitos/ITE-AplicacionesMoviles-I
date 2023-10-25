import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import globalStyles from '../styles'
import { formateadorCantidad } from '../helper'

const ControlPresupuesto = ({presupuesto, gastos}) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(()=>{
        const totalGastado = gastos.reduce((total,gasto)=>
        Number(gasto.cantidad) + total,0)
        const totalDisponible = presupuesto - totalGastado
        setGastado(totalGastado)
        setDisponible(totalDisponible)
        console.log(totalDisponible)
    },[])

  return (
    <View style={styles.contenedor}>
        <View style ={styles.centrarGrafico}>
            <Image source={require('../assets/img/chart.png')} style={styles.imagenEstilo}/>
        </View>
        <View>
            <Text>
                <Text style={styles.labelGastos}>
                    Presupuesto: {formateadorCantidad(presupuesto)}
                </Text>
            </Text>
            <Text>
                <Text style={styles.labelGastos}>
                    Disponible: {formateadorCantidad(disponible)}
                </Text>
            </Text>
            <Text>
                <Text style={styles.labelGastos}>
                    Gastado: {formateadorCantidad(gastado)}
                </Text>
            </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor:{
        ...globalStyles.contenedor
    },
    centrarGrafico:{
        alignItems: 'center'
    },
    imagenEstilo:{
        width: 300,
        height: 300,
    },
    labelGastos:{
        fontSize: 30,
        padding: 10,
        fontWeight: '700',
        color: '#a02a9c'
    }
})
export default ControlPresupuesto