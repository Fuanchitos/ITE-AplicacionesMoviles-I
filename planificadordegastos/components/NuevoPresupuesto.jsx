import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import globalStyles from '../styles'

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    handleNuevoPresupuesto,
    }) => {
    



    return (
        <View style={styles.contenedor}>
            <Text>Desde presupuesto</Text>
            <TextInput
            keyboardType="numeric"
            placeholder="Ejemplo"
            style={styles.input}
            onChangeText={setPresupuesto}
            value={presupuesto.toString()}/>
            <Pressable style={styles.boton}
            onPress={() => handleNuevoPresupuesto(presupuesto)}>
                <Text style={styles.botonTexto}>Agregar presupuesto</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor:{
        ...globalStyles.contenedor
    },
    botonTexto: {
        color: 'white',
        textAlign: 'center',
    },
    boton:{
        backgroundColor: "#0c6285",
        borderRadius:10,
        textAlign: 'center',
        padding: 18,
        marginTop: 30,
    },
    input:{
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 20,
    },

});

export default NuevoPresupuesto


