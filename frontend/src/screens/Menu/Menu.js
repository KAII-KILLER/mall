import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar, TouchableOpacity, TouchableHighlight, Button, Text, ScrollView } from "react-native";

export default class Menu extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {

    return (
      <View style={styles.container}>

        <Image
          source={require("../../assets/images/logojardin300x133.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>

        <View style={{ top: -49 }}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Bancos")}>
            <Image
              source={require("../../assets/images/banco.png")}
              resizeMode="contain"
              style={styles.imagenes}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Mapa")}>
            <Image
              source={require("../../assets/images/mapa.png")}
              resizeMode="contain"
              style={styles.imagenes}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Comida")}>
            <Image
              source={require("../../assets/images/comida.png")}
              resizeMode="contain"
              style={styles.imagenes}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Tiendas")}>
            <Image
              source={require("../../assets/images/shopping.png")}
              resizeMode="contain"
              style={styles.imagenes}
            ></Image> 
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    left: 0,
    top: -4,
  },
  imagenes: {
    width: 200,
    height: 147,
    left: 0,
  },
});

