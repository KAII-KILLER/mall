import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight, ScrollView } from "react-native";
import styles from "./styles";
import { getIngredientName, getAllIngredients } from "../../data/MockDataAPI";

export default class PromocionesTienda extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerTitleStyle: {
        fontSize: 16,
      },
    };
  };

  constructor(props) {
    super(props);
  }

  /*onPressPromotion = (item) => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate("Ingredient", { item });
  };*/

  getImage($imagen) {
    const image = 'data:image/png;base64,' + $imagen;
    //console.log(image);
    return image;
  }

  renderPromotion = ({ item }) => (
    <TouchableHighlight
      underlayColor="transparent"
      /*onPress={() => this.onPressPromotion(item)}*/
      onPress={() => this.props.navigation.navigate("Promocion", { item })}
    >
      <ScrollView>
        <View style={styles.containerPromo}>
          <Image style={styles.photoPromo} source={{ uri: this.getImage(item.qr) }} />
          <Text style={styles.titlePromo}>{item.info}</Text>
          <Text style={{ color: "grey" }}>{item.valor}%</Text>
        </View>
      </ScrollView>
    </TouchableHighlight>
  );

  render() {

    const { navigation } = this.props;
    const { route } = this.props;
    const item = route.params.promotions;

    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={item}
          renderItem={this.renderPromotion}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}

/*for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}*/