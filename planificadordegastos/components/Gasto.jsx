import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { formateadorCantidad } from '../helper'


const diccionarioIconos = {
    casa: require('../assets/img/3.png'),
    comida: require('../assets/img/1.png'),
    salud: require('../assets/img/2.png'),
}

const Gasto = ({gasto}) => {
    const {nombre,cantidad,categoria} = gasto
  return (
    <View style={styles.contenido}>
        <View style={styles.contenedor}>
           <View style={styles.contenedorImagen}>
           <Image
           style={styles.imagen}
            source={diccionarioIconos[categoria]}/>
            <View style={styles.contenedorTexto}>
             <Text style={styles.categoria}>{categoria}</Text>
             <Text style={styles.nombre}>{nombre}</Text>
            </View>
           </View>
           <Text>{formateadorCantidad(gasto.cantidad)}</Text>
        </View>
    </View>>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        marginBottom:20
    },
    contenido:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contenedorImagen:{

    },
    Imagen: {
        width:80,
        height:80,
        marginRight: 20,
    },
    contenedorImagen:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    contenedorTexto:{
        flex: 1,
        flexDirection: 1,
        
    },
    categoria:{
        color: '#a6a3a3',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    nombre:{
        fontSize: 22,
        color: '#11215d',
        textTransform: 'capitalize'
    },

    cantidad:{
        fontSize: 24,
        fontWeight: 'normal'
    }
})

export default Gasto