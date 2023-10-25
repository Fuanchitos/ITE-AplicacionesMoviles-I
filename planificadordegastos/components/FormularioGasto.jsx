import React, {useState} from 'react'
import { Pressable, SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'
const FormularioGasto = ({modal, setModal, handleGasto}) => {
    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    
  return (
    <SafeAreaView style={styles.container}>  
        <View>
            <View>
                <Text style={styles.label}>Nuevo Gasto</Text>
                <View>
                    <Text style={styles.labelInput}>Nombre del gasto</Text>
                    <TextInput 
                    placeholder='Nombre del gasto' 
                    style={styles.InputGasto}
                    value={nombreGasto}
                    onChangeText={setNombreGasto}
                    />
                </View>
                <View>
                    <Text style={styles.labelInput}>Cantidad</Text>
                    <TextInput 
                    placeholder='Ingrese una cantidad' 
                    style={styles.InputGasto}
                    value={cantidad}
                    onChangeText={setCantidad}/>
                </View>
            </View>
            <View>
                <Text style={styles.labelPicker}>Categoria</Text>
                <Picker
                style={styles.picker}
                selectedValue={categoria}
                onValueChange={(valor) =>
                setCategoria(valor)
                }
                >
                <Picker.Item label="Selecciona una categoria" value={''} />
                <Picker.Item label="Comida" value={'Comida'}/>
                <Picker.Item label="Casa" value={'Casa'} />
                <Picker.Item label="Salud" value={'Salud'} />
                </Picker>
            </View>
            <Pressable onPress={()=>{handleGasto({nombreGasto, cantidad, categoria})
                setModal(!modal)}}>
                <Text style={styles.buttonAgregar}>Agregar Gasto</Text>
            </Pressable>
            <Pressable onPress={()=>{setModal(!modal)}}>
                <Text style={styles.buttonCancelar}>Cancelar</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        ...globalStyles.contenedor
    },
    buttonAgregar:{
        backgroundColor: '#318897',
        borderRadius: 12,
        padding: 10,
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 15,
        marginTop: 15
    },
    buttonCancelar:{
        backgroundColor: '#c32222',
        borderRadius: 12,
        padding: 10,
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 15,
        marginTop: 15
    },
    picker:{
       backgroundColor: '#318897',
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
})
export default FormularioGasto