import { useState } from "react";
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const [dark, setDark] = useState(false);
  const [hidden, setHidden] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: dark ? "#000" : "#fff",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
      ]}
    >
      <StatusBar
        barStyle={dark ? "light-content" : "dark-content"}
        backgroundColor={dark ? "#000" : "#fff"}
        hidden={hidden}
      />

      <View style={styles.container}>
        <Text
          style={{
            color: dark ? "#fff" : "#000",
            textAlign: "center",
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          Demonstração do comportamento do StatusBar
        </Text>
        <View style={{ height: 30 }} />
        <Button title="Mudar tema" onPress={() => setDark(!dark)} />
        <View style={{ height: 20 }} />
        <Button
          title={hidden ? "Mostrar StatusBar" : "Esconder StatusBar"}
          onPress={() => setHidden(!hidden)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
