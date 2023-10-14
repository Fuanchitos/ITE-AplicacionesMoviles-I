import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <SafeAreaView>
            <Text style={styles.texto}>Planificador de gastos</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#fffff',
    },
    texto:{
        textAlign: 'center',
        fontSize: 40,
        paddingTop: 50,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
      
    },
});

export default Header