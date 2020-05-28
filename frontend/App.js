import "react-native-gesture-handler";
import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { createStackNavigator } from "react-navigation-stack";

//import AppNavigation from './src/navigation/AppNavigation';
/*
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';*/

import firebase from "firebase";

import LoginScreen from "./src/screens/LoginScreen.js";
import Eventos from "./src/screens/Eventos.js";
import Menu from "./src/screens/Menu/Menu.js";
import Promociones from "./src/screens/Promociones/Promociones.js";
import LoadingScreen from "./src/screens/LoadingScreen.js";
import RegisterScreen from "./src/screens/RegisterScreen.js";
import BanksScreen from "./src/screens/Menu/BanksScreen.js";
import FoodScreen from "./src/screens/Menu/FoodScreen.js";
import MapaScreen from "./src/screens/Menu/MapaScreen.js";
import StoreScreen from "./src/screens/Tiendas/StoreScreen.js";
import ListaTiendasScreen from "./src/screens/Tiendas/ListaTiendas.js";
import PromocionesTienda from "./src/screens/Tiendas/PromocionesTienda.js";
import Promocion from "./src/screens/Promociones/Promocion.js";
import HomeScreen from "./src/screens/HomeScreen.js";


var firebaseConfig = {
  apiKey: "AIzaSyDfsgSO3G13i9GtEAt1QN4mKJtzBk7bDzo",
  authDomain: "appjardin-806f3.firebaseapp.com",
  databaseURL: "https://appjardin-806f3.firebaseio.com",
  projectId: "appjardin-806f3",
  storageBucket: "appjardin-806f3.appspot.com",
  messagingSenderId: "490827514275",
  appId: "1:490827514275:web:170ae3a1c1ba6f55795a16",
  measurementId: "G-M1MC1EL2KS",
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

//firebase.analytics(); //-> Analytica de datos - Habilitar cuando sea necesario

/*function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Promociones")}
        title="PROMOCIONES"
      />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}*/

const MenuStack = createStackNavigator();

const MenuStackScreen = () => (
  <MenuStack.Navigator>
    <MenuStack.Screen name="Bancos" component={BanksScreen} />
    <MenuStack.Screen name="Comida" component={FoodScreen} />
    <MenuStack.Screen name="Mapas" component={MapaScreen} />
  </MenuStack.Navigator>
);

const Drawer = createDrawerNavigator();

export default function App() {

  /*return (
    <AppNavigation/>
  );*/

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Loading">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Promociones" component={Promociones} />
        <Drawer.Screen name="Eventos" component={Eventos} />
        <Drawer.Screen name="Loading" component={LoadingScreen} />
        <Drawer.Screen name="Registro" component={RegisterScreen} />
        <Drawer.Screen name="Bancos" component={BanksScreen} />
        <Drawer.Screen name="Comida" component={FoodScreen} />
        <Drawer.Screen name="Tiendas" component={ListaTiendasScreen} />
        <Drawer.Screen name="Tienda" component={StoreScreen} />
        <Drawer.Screen name="PromocionesTienda" component={PromocionesTienda} />
        <Drawer.Screen name="Promocion" component={Promocion} />
        <Drawer.Screen name="Mapa" component={MapaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


console.disableYellowBox = true; //--> Caja de advertencias