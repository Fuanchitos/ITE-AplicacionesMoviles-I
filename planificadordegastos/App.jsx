import React, { useState } from 'react';
import { Alert, StyleSheet, View, Pressable, Image, Text, Modal, ScrollView } from 'react-native';
import Header from './components/Header';
import NuevoPresupuesto from './components/NuevoPresupuesto';
import ControlPresupuesto from './components/ControlPresupuesto';
import FormularioGasto from './components/FormularioGasto';
import { generarId } from './helper';
import ListadoGastos from './components/ListadoGastos';

export default function App(){
  const [isPresupuestoValido, setIsPresupuestoValido] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [modal, setModal] = useState(false)
  const [gastos, setGastos] = useState([
  ])

  const handleNuevoPresupuesto = (presupuesto)=>{
    if(Number(presupuesto) > 0){
      setIsPresupuestoValido(true)
    } else{
      Alert.alert('Error', 'El presupuesto debe ser mayor a 0',['OK'])
    }

  }
  const handleGasto = gasto =>{
    if(Object.values(gasto).includes('')){
      Alert.alert('Error', 'Hay algun espacio vacio')
      return
    }
    //Agregamos el gasto al state
    gasto.id = generarId()
    setGastos([...gastos,gasto])  
    console.log(gastos) 
  }
  return(
    <View styles = {StyleSheet.container}>
      <ScrollView>
      <View style={styles.header}>
        <Header/>
        {/* Uso de operacion ternaria */}
        {!isPresupuestoValido ?
        (<NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        handleNuevoPresupuesto ={handleNuevoPresupuesto}
        />) 
        : 
        (<><ControlPresupuesto
        presupuesto={presupuesto}
        gastos={gastos}/>
        
        </>)}
      </View>

      {isPresupuestoValido &&(
        <ListadoGastos
        gastos={gastos}
        />
      )}

    </ScrollView>
      {modal &&(
        <Modal
        animationType='fade'
        visible={modal}
        >
        <FormularioGasto
        setModal={setModal}
        modal={modal}
        handleGasto={handleGasto}
        />

        </Modal>
      )}

      {isPresupuestoValido &&(
        <Pressable
        onPress={()=>setModal(!modal)}
        >
        <Image
        style={styles.imagen}
        source={require('./assets/img/button.png')}
        />
        </Pressable>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eb5262',
  },
  header: {
    backgroundColor: '#eb5262',
    minHeight: 645
  },
  imagen:{
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20
  }
});