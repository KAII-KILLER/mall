import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, Image, ImageBackground, Text, FlatList, TouchableHighlight } from "react-native";
import styles from '../styles';

export default class PromocionesScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      promociones: [],
      url: 'https://d380bdd6c83c.ngrok.io/api/promociones',   
    }    
  }

  async componentDidMount() {

    this.setState({ loading: true })

    try {
      let res = await fetch(this.state.url)
      let data = await res.json()
      this.setState({
        promociones: data,
        loading: false,
      })
    } catch (error) {
      console.error();
    }
  }

  getImage($imagen) {
    const image = 'data:image/png;base64,' + $imagen;
    return image;
  }

  renderPromociones = ({ item }) => (
    <TouchableHighlight underlayColor='transparent' onPress={() => this.props.navigation.navigate("Promocion", { item })}>
      <View style={estilos.promocion}>
        <ImageBackground source={require("../../assets/images/promo1.png")} style={estilos.imagenPromo} >
          <View style={estilos.promo}>
            <View style={estilos.anuncio}>
              <Text style={estilos.promoNombre}>{item.nombre}</Text>
              <Text>{item.info}</Text>
              <Text style={{ fontSize: 11 }}>Desc {item.valor}%</Text>
            </View>
            <Image style={estilos.qr} source={{ uri: this.getImage(item.qr) }} />
          </View>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  );
  
  render ()
  {
    if (this.state.loading) {
      return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Cargando...</Text>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      );
    }

    return (
      <View style={estilos.container}> 
        <Image
          source={require("../../assets/images/images1.jpg")}
          resizeMode="contain"
          style={estilos.image2}
        ></Image>
        <Text style={estilos.ofertasDisponibles}>Ofertas Disponibles</Text>
        <FlatList
          data={this.state.promociones}
          renderItem={this.renderPromociones}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(163,100,255,1)", 
  },
  image2: {
    top: -3,
    width: 375,
    height: 145,
  },
  ofertasDisponibles: {
    color: "rgba(250,250,250,1)",
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center"
  },
  promocion: {
    flex: 1,
    margin: 10,
    marginLeft: 35,
    marginRight: 35,
    justifyContent: 'center',
    alignItems: 'center',
    height: 161,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    backgroundColor: 'white',
  },
  imagenPromo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    opacity: 0.96,
  },
  qr: {
    backgroundColor: '#fff',
    width: 120,
    height: 120,
    opacity: 0.85,
    marginRight: 20,
  },
  promo: {
    flexDirection: 'row',
  },
  anuncio: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
});