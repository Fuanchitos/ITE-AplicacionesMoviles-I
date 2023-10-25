import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { formateadorCantidad, formatearFecha } from '../helper';
import globalStyles from '../styles';

const diccionarioIconos = {
  Casa: require('../assets/img/icono_casa.png'),
  Comida: require('../assets/img/icono_comida.png'),
  Salud: require('../assets/img/icono_salud.png')
};

const Gasto = ({ gasto, setModal, setGasto, onDeleteGasto }) => {
  const { nombreGasto, cantidad, categoria, fecha } = gasto;

  const handleAcciones = () => {
    setModal(true);
    setGasto(gasto);
  };

  const handleEliminarGasto = () => {
    onDeleteGasto(gasto.id); // Llamar a la función onDeleteGasto con el ID del gasto a eliminar
  };

  return (
    <Pressable onLongPress={handleAcciones}>
      <View style={styles.contenedor}>
        <View style={styles.contenido}>
          <View style={styles.contenedorImagen}>
            <Image style={styles.imagen} source={diccionarioIconos[categoria]} />
            <View style={styles.contenedorTexto}>
              <Text style={styles.categoria}>{categoria}</Text>
              <Text style={styles.nombre}>{nombreGasto}</Text>
              <Text style={styles.categoria}>Fecha</Text>
              <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
            </View>
          </View>
          <Text style={styles.cantidad}>{formateadorCantidad(gasto.cantidad)}</Text>
        </View>
        <View>
          <Pressable onPress={handleEliminarGasto}>
            <Text style={styles.buttonEliminar}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
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
  },
  fecha:{
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold'
  },
  buttonEliminar: {
    backgroundColor: '#c32222',
    borderRadius: 8, // Ajusta el valor para cambiar la curvatura de los bordes
    padding: 10,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14, // Ajusta el tamaño del texto
    fontWeight: 'bold', // Opcional, puedes ajustar el peso de la fuente
    marginTop: 10, // Ajusta el espacio superior
    // Otros estilos que desees agregar, como ancho, altura, márgenes, etc.
  }
})
export default Gasto