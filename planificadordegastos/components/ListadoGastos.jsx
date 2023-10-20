import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Gasto = ({ gasto }) => {
    const { nombre, cantidad, categoria } = gasto;
    return (
        <View style={styles.contenedor}>
            <View>
                <View>
                    <Text>{categoria}</Text>
                    <Text>{nombre}</Text>
                </View>
                <Text>{formateadorCantidad(gasto.cantidad)}</Text>
            </View>
        </View>
    );
};

const ListadoGastos = () => {
    return (
        <View>
            <Text>ListadoGastos</Text>
            <Gasto gasto={{ nombre: 'Ejemplo', cantidad: 100, categoria: 'Ejemplo' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        marginVertical: 70,
        marginBottom: 100,
    },
    titulo: {
        color: '#a09f9f',
        fontSize: 30,
        textAlign: 'center', // Corregí el error de sintaxis aquí
    },
});

export default ListadoGastos;
