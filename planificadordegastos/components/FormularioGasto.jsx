import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const FormularioGasto = ({ modal, setModal }) => {
  const [selectedValue, setSelectedValue] = useState('option1'); // Estado para almacenar el valor seleccionado del Picker

  return (
      <SafeAreaView style={styles.container}>  
          <View>
              <View>
                  <Text style={styles.label}>Nuevo Gasto</Text>
                  <View>
                      <Text style={styles.labelInput}>Nombre del gasto</Text>
                      <TextInput placeholder='Nombre del gasto' style={styles.InputGasto}/>
                  </View>
              </View>
              <View>
              <Picker
                    style={styles.picker}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Opcion 1" value="option1" />
                    <Picker.Item label="Opcion 2" value="option2" />
                    <Picker.Item label="Opcion 3" value="option3" />
                </Picker>
              </View>
              <Pressable onPress={()=>{setModal(!modal)}}>
                  <Text style={styles.button}>Cancelar</Text>
              </Pressable>
          </View>
      </SafeAreaView>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c660de',
  },
  button:{
    backgroundColor: '#f5425a',
    borderRadius: 12,
    padding: 10,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 15,
    marginTop: 15
},
picker:{
   backgroundColor: '#3d69b5',
},
InputGasto:{
    backgroundColor: '#318897',
    color: 'white',
    textAlign: "center"
},
label:{
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
},
labelInput:{
    padding: 2,
    fontSize: 15,
},
labelPicker:{
    fontSize: 15,
    padding: 2,
    marginTop: 10,
},
});

export default FormularioGasto;
