import React, { useState } from 'react';
import { Alert, StyleSheet, View, Pressable, Image, Text, Modal } from 'react-native';
import Header from './components/Header';
import NuevoPresupuesto from './components/NuevoPresupuesto';
import { ControlPresupuesto } from './components/ControlPresupuesto';
import FormularioGasto from './components/FormularioGasto';


export default function App(){
  const [isPresupuestoValido, setIsPresupuestoValido] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos,setGastos] = useState([

  ])
  const [modal,setModal] = useState(false)

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
          
          
          <><ControlPresupuesto
        presupuesto={presupuesto}
        
        gastos={gastos}
        />
        <Text> Hello</Text>
        </>
    
        ):
        ( 
        <NuevoPresupuesto 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        handleNuevoPresupuesto={handleNuevoPresupuesto}/>
        ) }      
      </View>
          {modal && (
            <Modal
              animationType='slide'
              visible={modal}>
              <FormularioGasto setModal={setModal}
              modal={modal}/>
              </Modal>

          )}
          

      {isPresupuestoValido&&(
        <Pressable
        onPress={()=>setModal(!modal)}
        >
          <Image
            styles = {styles.imagen}
            source={require('./assets/img/add.png')}
          />
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#c660de',
  },
 imagen:{
  width: 60,
  height: 60,
  position: 'absolute',
  top: 120,
  right: 20,
 },

  
  header: {
    backgroundColor: '#8b2ea9'
  },
});
