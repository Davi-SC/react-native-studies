import {StyleSheet, View, Text, Button, Alert} from 'react-native'
import React from 'react'
import { SafeAreaInsetsContext, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


const alertOneButton=()=>{
  Alert.alert('Alerta 1 Botão', 'Esse alerta so contém um botão',[
    {text: 'Oi',
    onPress:()=>{console.log('Oi Pressionado')}
    }
  ])
}
const alertTwoButton=()=>{
  Alert.alert('Alerta 2 Botões', 'Esse alerta tem dois botões',[
    {text: 'Oi',
      onPress:()=>{console.log('Oi Pressionado')}
    },{text: 'Hi',
      onPress:()=>{console.log('Hi Pressed')}
    }
  ])
}
const alertThreeButton=()=>{
  Alert.alert('Alerta 3 Botões', 'Esse alerta tem três botões',[
    {text: 'Oi',
      onPress:()=>{console.log('Oi Pressionado')}
    },{text: 'Hi',
      onPress:()=>{console.log('Hi Pressed')}
    },{text: 'Salut',
      onPress:()=>{console.log('Salut Pressé')}
    }
  ])
}

export default function Index() {
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <Button title={'Alerta aleatório'} onPress={()=>{
          let random = Math.random()*(3-1)+1
          if(random>=1 && random<=2){
            alertOneButton()
          }else if(random>=2 && random<=3){
            alertTwoButton()
          }else{
            alertThreeButton()
          }
          }}/>
      </SafeAreaView>   
    </SafeAreaProvider>
  )
}