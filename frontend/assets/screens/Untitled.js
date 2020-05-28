import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../assets/images/Gradient_gk1l0So.png")}
        >
          <View style={styles.image4Row}>
            <Image
              source={require("../assets/images/twitter.jpg")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Image
              source={require("../assets/images/facebook1.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Image
              source={require("../assets/images/google1.jpg")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
          <TextInput
            placeholder="Usuario"
            placeholderTextColor="rgba(242,242,242,1)"
            selectionColor="rgba(230, 230, 230,1)"
            underlineColorAndroid="rgba(230, 230, 230,1)"
            style={styles.usuario}
          ></TextInput>
          <TextInput
            placeholder="Correo"
            placeholderTextColor="rgba(242,242,242,1)"
            selectionColor="rgba(230, 230, 230,1)"
            underlineColorAndroid="rgba(230, 230, 230,1)"
            style={styles.usuario3}
          ></TextInput>
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="rgba(242,242,242,1)"
            selectionColor="rgba(230, 230, 230,1)"
            underlineColorAndroid="rgba(230, 230, 230,1)"
            style={styles.usuario2}
          ></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.login}>LOGIN</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Image
          source={require("../assets/images/logoMorado.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(109,11,196,0.84)",
    opacity: 0.84
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    position: "absolute"
  },
  rect_imageStyle: {},
  image4: {
    width: 47,
    height: 48,
    borderRadius: 100,
    marginTop: 3
  },
  image2: {
    width: 49,
    height: 55,
    marginLeft: 42
  },
  image3: {
    width: 51,
    height: 55,
    borderRadius: 100,
    marginLeft: 49
  },
  image4Row: {
    height: 55,
    flexDirection: "row",
    marginTop: 126,
    marginLeft: 73,
    marginRight: 64
  },
  usuario: {
    width: 224,
    height: 41,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 107,
    marginLeft: 75
  },
  usuario3: {
    width: 224,
    height: 41,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 14,
    marginLeft: 74
  },
  usuario2: {
    width: 224,
    height: 41,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 75
  },
  button: {
    width: 224,
    height: 50,
    backgroundColor: "rgba(223,50,182,1)",
    borderRadius: 18,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 50,
    marginLeft: 75
  },
  login: {
    color: "rgba(242,242,242,1)",
    fontSize: 17,
    fontFamily: "roboto-regular",
    marginTop: 25,
    marginLeft: 88
  },
  image: {
    top: 690,
    left: 86,
    width: 200,
    height: 155,
    position: "absolute"
  },
  rectStack: {
    width: 375,
    height: 845
  }
});

export default Untitled;
