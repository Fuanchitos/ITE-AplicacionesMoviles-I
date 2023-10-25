import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { formateadorCantidad } from '../helper'
import globalStyles from '../styles'

const diccionarioIconos ={
  Casa: require('../assets/img/icono_casa.png'),
  Comida: require('../assets/img/icono_comida.png'),
  Salud: require('../assets/img/icono_salud.png')
}

const Gasto = ({gasto}) => {
  const {nombreGasto, cantidad, categoria} = gasto
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenido}>
        <View style={styles.contenedorImagen}>
        <Image
        style={styles.imagen}
        source={diccionarioIconos[categoria]}
        />
        <View style={styles.contenedorTexto}>
          <Text style={styles.categoria}>{categoria}</Text>
          <Text style={styles.nombre}>{nombreGasto}</Text>
        </View>
        </View>
        <Text style={styles.cantidad}>{formateadorCantidad(cantidad)}</Text>
      </View>   
    </View>
  )
}
const styles = StyleSheet.create({
  contenedor:{
    ...globalStyles.contenedor,
    marginBottom: 20
  },
  contenido:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contenedorImagen:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagen:{
    width: 80,
    height: 80,
    marginRight: 15
  },
  contenedorTexto:{
    flex:1,
  },
  nombre:{
    color: '#6ea5f7',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '500',
    marginBottom: 10
  },
  categoria:{
    color: '#6ea5f7',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  cantidad:{
    fontSize: 24,
    fontWeight: '800'
  }
})
export default Gasto