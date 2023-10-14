import React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import globalStyles from '../styles'
import { formateadorCantidad } from '../helper'

export const ControlPresupuesto = ({presupuesto}) => {
  return (
    < View style={styles.contenedor}>
        <View style={styles.centrarGrafico}>
            <Image style={styles.imagen}
            source={require('../assets/img/chart.png')
                
        }
            />
        </View>
        <View>
        <Text>
            <Text style={styles.labelGastos}>Presupuesto : {formateadorCantidad(presupuesto)}</Text>
        </Text>
        <Text>
            <Text style={styles.labelGastos}>Disponible : {formateadorCantidad(presupuesto)}</Text>
        </Text>
        <Text>
            <Text style={styles.labelGastos}>Gastos : {formateadorCantidad(presupuesto)}</Text>
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
        alignItems: 'center',
    },
    imagen:{
        width: 300,
        height: 300,
    },
    labelGastos:{
        fontSize:30,
        paddingBottom: 10,
        fontWeight: '700',
        color: '#f5f5f5'
    },
})

export default ControlPresupuesto
