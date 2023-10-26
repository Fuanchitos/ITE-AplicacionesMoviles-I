import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setModal, setGasto, onDeleteGasto }) => {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.tituto}>Gastos</Text>
        {gastos.length === 0 ? (
          <Text style={styles.textNoGastos}> No hay gastos</Text>
        ) : (
          gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setModal={setModal}
              setGasto={setGasto}
              onDeleteGasto={onDeleteGasto} // Pasar la función onDeleteGasto
            />
          ))
        )}
      </View>
    );
  };
const styles = StyleSheet.create({
    contenedor:{
        marginVertical: 20,
    },
    tituto:{
        color: '#00003d',
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