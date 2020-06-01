import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  StatusBar
} from "react-native";

function Untitled3(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageStackStack}>

          <Image
            source={require("../assets/images/logojardin300x133.jpg")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>

          <View style={styles.imageStack}>
            <Image
              source={require("../assets/images/6.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.loremIpsum}>
              08 de marzo. Paula Pimentel y Karen Noboa conforman Sweet N´Sour. Un
              singular grupo que interpreta canciones de mujeres emblemáticas de
              los 80, 90 y 2000 con alegría y pasión.No te pierdas su presentación
              en vivo en conmemoración al Día de la Mujer.
            </Text>
          </View>

          <Image
            source={require("../assets/images/5.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Image
            source={require("../assets/images/4.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>

          <Text style={styles.loremIpsum2}>
            13h00, Nivel 3. Música en vivo con Freak Show: Disfruta un almuerzo
            muy especial con los mejores éxitos del pop y el rock romántico de
            la mano de este increíble talento nacional.
          </Text>
          <Text style={styles.loremIpsum3}>
            Del 03 al 27 de febrero. Celebra el amor en Mall El Jardín y
            participa por increíbles premios.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
  },
  image: {
    top: 81,
    width: 375,
    height: 120,
    position: "absolute"
  },
  scrollArea: {
    left: 364,
    width: 11,
    height: 735,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    top: 0
  },
  scrollArea_contentContainerStyle: {
    width: 100,
    height: 100
  },
  imageStack: {
    top: 18,
    left: 0,
    width: 375,
    height: 735,
    position: "absolute"
  },
  image1: {
    top: 0,
    left: 85,
    width: 200,
    height: 95,
    backgroundColor: "rgba(253,253,253,1)",
  },
  image2: {
    top: 350,
    width: 375,
    height: 135,
    position: "absolute",
    left: 0
  },
  image3: {
    top: 570,
    left: -2,
    width: 375,
    height: 124,
    position: "absolute"
  },
  loremIpsum: {
    top: 220,
    left: 30,
    width: 300,
    height: 95,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 13,
    textAlign: 'justify',
  },
  loremIpsum2: {
    top: 495,
    left: 30,
    width: 300,
    height: 62,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 13,
    textAlign: 'justify',
  },
  loremIpsum3: {
    top: 710,
    left: 30,
    width: 300,
    height: 32,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 13,
    textAlign: 'justify',
  },
  imageStackStack: {
    width: 375,
    height: 753,
    marginTop: 21
  }
});

export default Untitled3;
