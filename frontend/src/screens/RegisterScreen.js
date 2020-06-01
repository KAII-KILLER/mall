import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";
import firebase from "firebase";

export default class RegisterScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null,
  };

  handleSignUp = () => {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
            displayName: this.state.name
        });
      })
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
          <View style={styles.iconos}>
            <Image
              source={require("../assets/images/twitter.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Image
              source={require("../assets/images/facebook1.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Image
              source={require("../assets/images/google_plus_512px.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>

          <View style={{ marginTop: -30 }}>
            <TextInput
              placeholder="Nombre"
              placeholderTextColor="rgba(242,242,242,1)"
              selectionColor="rgba(230, 230, 230,1)"
              underlineColorAndroid="rgba(230, 230, 230,1)"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            ></TextInput>

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

          <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
            <Text style={styles.login}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 27 }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ color: "rgba(242,242,242,1)", fontSize: 14 }}>
              ¿Ya tienes cuenta?{" "}
              <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                Iniciar Sesión!
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
  iconos: {
    height: 30,
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
    marginTop: 80,
    marginLeft: 87,
    borderRadius: 150,
  },
});
