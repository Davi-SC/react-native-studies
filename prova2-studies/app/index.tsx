import {
  StatusBar,
  Text,
  View,
  Button,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function Index() {
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Estudo conteudos da prova 2
      </Text>
      <View style={{ padding: 10 }}></View>
      {/* Statusbar */}
      <StatusBar
        hidden={hidden}
        barStyle={dark ? "light-content" : "dark-content"}
      />
      <Button onPress={() => setDark(!dark)} title="Mudar StatusBar" />
      <Button onPress={() => setHidden(!hidden)} title="Esconder StatusBar" />

      <View style={{ padding: 10 }}></View>
      {/* Touchables */}
      <TouchableHighlight
        underlayColor="#003"
        onPress={() => Alert.alert("pressionou um pouco")}
        onLongPress={() => Alert.alert("pressionou bastante")}
      >
        <View>
          <Text>TouchableHighligth</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        style={{ padding: 10 }}
        activeOpacity={0.5}
        onPress={() => {}}
      >
        <View>
          <Text>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#003", true)}
        onPress={() => {}}
      >
        <View>
          <Text>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>

      {/* Alerts */}

      <View style={{ padding: 10 }}></View>

      <Button
        title="Alerta Simples"
        onPress={() => Alert.alert("Alerta Simples")}
      ></Button>
      <Button
        title="Alerta Duplo/Confirmação"
        onPress={() =>
          Alert.alert("Alerta Duplo/Confirmação", "Deseja continuar?", [
            { text: "Ok" },
            { text: "Cancelar" },
          ])
        }
      ></Button>
      <Button
        title="Alerta Triplo"
        onPress={() =>
          Alert.alert("Alerta Triplo", "Pra q isso tudo", [
            { text: "Ok" },
            { text: "Cancelar" },
            { text: "Não sei" },
          ])
        }
      />
      {/* Input */}
      <Text style={{ padding: 20 }}>Pequeno formulario feito com inputs</Text>
      <View
        style={{
          alignItems: "center",
          borderRadius: 25,
          padding: 10,
          backgroundColor: "#ccc",
        }}
      >
        <Text>Nome:</Text>
        <TextInput onChangeText={setNome} placeholder="Nome"></TextInput>

        <Text>Email:</Text>
        <TextInput onChangeText={setEmail} placeholder="Email"></TextInput>

        <Text>Mensagem:</Text>
        <TextInput
          onChangeText={setMensagem}
          placeholder="Mensagem"
          multiline
        ></TextInput>
      </View>
      <View>
        <Text>Seus dados:</Text>
        <Text>{nome}</Text>
        <Text>{email}</Text>
        <Text>{mensagem}</Text>
      </View>
    </View>
  );
}
