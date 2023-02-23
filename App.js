import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valor1: 0, valor2: 0 };
  }
  calculaIMC() {
    const { valor1, valor2 } = this.state;
    var result = valor1 / valor2 ** 2;
    if (result < 18.5) {
      alert("Abaixo do peso");
    }
    if (result >= 18.5 && result < 25) {
      alert("Peso normal");
    }
    if (result >= 25 && result < 30) {
      alert("Acima do peso");
    }
    if (result >= 30) {
      alert("Obeso");
    }
  }
  render() {
    return (
      <View style={styles.container}>
               {" "}
        <TextInput
          id="input1"
          placeholder="Peso"
          style={styles.textInput}
          onChangeText={(valor1) => this.setState({ valor1 })}
        />
               {" "}
        <TextInput
          id="input2"
          placeholder="Altura"
          style={styles.textInput}
          onChangeText={(valor2) => this.setState({ valor2 })}
        />
                      {" "}
        <TouchableOpacity
          onPress={() => this.calculaIMC()}
          style={styles.touchableopacity}
        >
                  <Text>Calcular</Text>       {" "}
        </TouchableOpacity>
             {" "}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  text: {
    fontSize: 25,
    ...Platform.select({ ios: { color: "red" }, android: { color: "green" } }),
  },
  textColor: { color: "black" },
  textInput: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
    width: 250,
  },
  touchableopacity: {
    backgroundColor: "#4682B4",
    textAlign: "center",
    width: 250,
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
  },
});
