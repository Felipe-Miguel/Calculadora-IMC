import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ImageBackground,
  TouchableOpacity,
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
      <ImageBackground style={styles.container} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIYh49Hw53XU0ZjwrIk82-ShgL9IeIz7RXpNwHavhQgn24lriDvZarzGwDmWSI-MVyvg&usqp=CAU'}} resizeMode="cover">
      <View style={styles.geral}>
        <Text style={styles.text}>Calculadora de IMC</Text>
        <TextInput
          id="input1"
          placeholder="Peso"
          style={styles.textInput}
          onChangeText={(valor1) => this.setState({ valor1 })}
        />
        <TextInput
          id="input2"
          placeholder="Altura"
          style={styles.textInput}
          onChangeText={(valor2) => this.setState({ valor2 })}
        />
        <TouchableOpacity
          onPress={() => this.calculaIMC()}
          style={styles.touchableopacity}
        ><Text>Calcular</Text>   
        </TouchableOpacity>
      </View>
      </ImageBackground>
    
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
  geral:{
    textAlign:'center',
    marginTop: 250,
  },
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
  text:{
    color: 'white',
     fontWeight: 'bold',
  }
});
