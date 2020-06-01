import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableOpacity, Image, Dimensions, TouchableHighlight } from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getIngredientName } from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';


const { width: viewportWidth } = Dimensions.get('window');

export default class StoreScreen extends React.Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            headerTransparent: 'true',
            headerLeft: (
                <BackButton
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
            )
        };
    };


    constructor(props) {

        super(props);

        this.state = {
          activeSlide: 0,
        };
    }


    renderImage = ({ item }) => (
        <TouchableHighlight>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item }} />
            </View>
        </TouchableHighlight>
    );

    onPressIngredient = item => {
        var name = getIngredientName(item);
        let ingredient = item;
        this.props.navigation.navigate('Ingredient', { ingredient, name });
    };


    render() {

        const { activeSlide } = this.state;
        const { navigation } = this.props;
        const { route } = this.props;
        const item = route.params.item;
        //console.log(item);

        return (
          <ScrollView style={styles.containerStore}>
            <View style={styles.carouselContainer}>
              <View style={styles.carousel}>
                <Image
                  style={{ width: viewportWidth, height: viewportWidth - 100 }}
                  source={{ uri: item.photo_url }}
                ></Image>
              </View>
            </View>

            <View style={styles.infoRecipeContainer}>
              <Text style={styles.infoRecipeName}>{item.nombre}</Text>

              <View style={styles.infoContainer}>
                <TouchableHighlight>
                  <Text style={styles.category}>
                    Nivel {String(item.nivel).toUpperCase()}
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.infoContainer}>
                <Image
                  style={styles.infoPhoto}
                  source={require("../../../assets/icons/shopping_cart.png")}
                />
                <Text style={styles.infoRecipe}>Local {item.local}</Text>
              </View>

              <View style={styles.containerButton}>
                <TouchableHighlight
                  onPress={() => {
                    let promotions = item.promociones;
                    let title = "Promociones " + item.title;
                    navigation.navigate("PromocionesTienda", { promotions, title });
                  }}
                >
                  <Text style={styles.textButton}>Promociones</Text>
                </TouchableHighlight>
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.infoDescriptionRecipe}>{item.info}</Text>
              </View>
            </View>
          </ScrollView>
        );
    }
}

/*cooking steps
<View style={styles.infoContainer}>
  <Image style={styles.infoPhoto} source={require('../../../assets/icons/info.png')} />
  <Text style={styles.infoRecipe}>Cooking Steps</Text>
</View>
<Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
*/
