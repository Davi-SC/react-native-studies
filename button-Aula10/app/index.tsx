import { Text, View, StyleSheet, Button , Alert} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

export default function Index() {
  const [color, setColor] = useState(false)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Botão padrão</Text>
          <Button title='Aperta ai' onPress={()=>Alert.alert('Apertou o botão simples')}/>
        </View>
        <View style={styles.separador}/>
        <View>
          <Text style={styles.title}>Botão desabilitado</Text>
          <Button title='Não consegue apertar kkkk' disabled/>
        </View>
        <View style={styles.separador}/>
        <View>
          <Text style={styles.title}>Botão com cor configurável</Text>
          <Button color={color ? "#f194ff" : "#ff0000"} title='Aperta ai' onPress={()=>{
            setColor(!color)
            Alert.alert('Mudou a cor do botão')
          }}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText:{
    textAlign:"center",
    marginVertical:8,
    fontSize:12
  },
  title:{
    textAlign:"center",
    marginVertical:8,
    fontSize:18
  },
  separador: {
    marginVertical:8,
    borderBottomColor: '#808080'
  }


})