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
    onDeleteGasto(gasto.id);
    setModal(true);
    setGasto(gasto);
  };

  const handleEliminarGasto = () => {
    onDeleteGasto(gasto.id);
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
        <View style={styles.botonesContainer}>
          <Pressable onPress={handleEliminarGasto}>
            <Text style={styles.buttonEliminar}>Eliminar</Text>
          </Pressable>
          <Pressable onPress={handleAcciones}>
            <Text style={styles.buttonEditar}>Editar</Text>
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
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '500',
    marginBottom: 10
  },
  categoria:{
    color: 'black',
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
  botonesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  buttonEliminar: {
    backgroundColor: '#c32222',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 10,
  },
  buttonEditar: {
    backgroundColor: '#014ba0',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Gasto;
