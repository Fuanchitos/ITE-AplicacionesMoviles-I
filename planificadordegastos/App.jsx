import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import NuevoPresupuesto from './components/NuevoPresupuesto';
import { ControlPresupuesto } from './components/ControlPresupuesto';


export default function App(){
  const [isPresupuestoValido, setIsPresupuestoValido] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)

  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsPresupuestoValido(true)
      console.log('presupuesto valido');
    } else {
      Alert.alert('Error', 'El presupuesto debe ser mayor a 0 ',['OK'])
    }
  }
  return(
    <View styles = {styles.container}>
      <View style={styles.header}>
        <Header/>

        {isPresupuestoValido ? (
        <ControlPresupuesto
        presupuesto={presupuesto}/>
        ):
        ( 
        <NuevoPresupuesto 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        handleNuevoPresupuesto={handleNuevoPresupuesto}/>
        ) }      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#c660de',
    transform:[{ translateY:40}],
  },
 

  
  header: {
    backgroundColor: '#8b2ea9'
  },
});
