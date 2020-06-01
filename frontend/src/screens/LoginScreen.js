import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, StatusBar } from "react-native";
import firebase from 'firebase';
import * as Google from "expo-google-app-auth";

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      signedIn: false,
      name: "",
      email: "",
      password: "",
      errorMessage: null,
      photoUrl: "",
    }
  }

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        //behavior: 'web', --> Tener en cuenta este mensaje --> Cambia el error y hace cosas diferentes
        androidClientId:
          "490827514275-43ke0jr8njqpht8v6dnkci6ptbeou7td.apps.googleusercontent.com",
        iosClientId:
          "490827514275-295k2mluajsvkp81q02r55kobasadrkp.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === 'success') {
        console.log("Login Succesfull!");
        this.props.navigation.navigate("Menu");
        return result.accessToken;
      } else {
        console.log("cancelled")
        return { cancelled: true };
      }
    } catch (e) {
      console.log("error", e)
      return { error: true };
    }
  }

  handleLogin = () => {
    const { email, password } = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../assets/images/Gradient_gk1l0So.png")}
        >
          <View style={styles.image4Row}>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/twitter.png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/facebook1.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.signInWithGoogleAsync()}>
              <Image
                source={require("../assets/images/google_plus_512px.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>

          <View style={{ marginTop: -15 }}>
            <TextInput
              placeholder="Correo Electrónico"
              placeholderTextColor="rgba(242,242,242,1)"
              selectionColor="rgba(230, 230, 230,1)"
              underlineColorAndroid="rgba(230, 230, 230,1)"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>

            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(242,242,242,1)"
              selectionColor="rgba(230, 230, 230,1)"
              underlineColorAndroid="rgba(230, 230, 230,1)"
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.login}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 27 }}
            onPress={() => this.props.navigation.navigate("Registro")}
          >
            <Text style={{ color: "rgba(242,242,242,1)", fontSize: 14 }}>
              ¿Nuevo Aquí?{" "}
              <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                Regístrate!
                </Text>
            </Text>
          </TouchableOpacity>

          <Image
            source={require("../assets/images/logoMorado.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </ImageBackground>
        <StatusBar></StatusBar>
      </View>
    );
  }
}

const LoggedInPage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(109,11,196,0.84)",
    opacity: 0.84,
  },
  rect: {
    width: 375,
    height: 812,
  },
  rect_imageStyle: {},
  image4: {
    width: 47,
    height: 48,
    borderRadius: 100,
    marginTop: 3,
  },
  image2: {
    width: 49,
    height: 55,
    marginLeft: 42,
  },
  image3: {
    width: 53,
    height: 51,
    borderRadius: 100,
    marginLeft: 49,
    marginTop: 1,
  },
  image4Row: {
    height: 55,
    flexDirection: "row",
    marginTop: 126,
    marginLeft: 73,
    marginRight: 62,
  },
  errorMessage: {
    height: 125,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "rgba(242,242,242,1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  input: {
    width: 224,
    height: 41,
    color: "rgba(242,242,242,1)",
    marginTop: 20,
    marginLeft: 75,
  },
  button: {
    width: 224,
    height: 50,
    backgroundColor: "rgba(223,50,182,1)",
    borderRadius: 18,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 50,
    marginLeft: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    color: "rgba(242,242,242,1)",
    fontSize: 17,
  },
  image: {
    width: 200,
    height: 155,
    marginTop: 100,
    marginLeft: 87,
    borderRadius: 150,
  },
  header: {
    fontSize: 25,
  },
});