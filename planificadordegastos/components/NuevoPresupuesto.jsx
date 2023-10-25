import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import globalStyles from "../styles";
const NuevoPresupuesto = ({handleNuevoPresupuesto, presupuesto, setPresupuesto}) => {
    

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Desde presupuesto</Text>
            <TextInput
            inputMode="numeric"
            placeholder="Agrega tu presupuesto: Ej. 100"
            style={styles.input}
            onChangeText={setPresupuesto}
            value={presupuesto.toString()}
            />
            <Pressable style={styles.boton}
            onPress={()=>handleNuevoPresupuesto(presupuesto)}
            >
                <Text style={styles.botonTexto}>Agregar presupuesto</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor:{
        ...globalStyles.contenedor
    },
    boton:{
        backgroundColor: "#0F8CAA",
        borderRadius: 10,
        textAlign: 'center',
        padding: 10,
        marginTop: 30,
    },
    label:{
        textAlign: 'center',
        fontSize: 24,
        color: '#67274d',
        marginBottom: 10,

    },
    input:{
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 12,
        textAlign: 'center',
        marginTop: 20,
    },
    botonTexto:{
        color: 'white',
        textAlign: 'center'
    },
});

export default NuevoPresupuesto


