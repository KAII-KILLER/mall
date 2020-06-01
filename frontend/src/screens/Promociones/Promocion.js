import React from 'react';
import { FlatList, ScrollView, Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import { getIngredientUrl, getRecipesByIngredient, getCategoryName } from '../../data/MockDataAPI';

export default class Promocion extends React.Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name')
        };
    };

    constructor(props) {
        super(props);
    }

    onPressRecipe = item => {
        this.props.navigation.navigate('Recipe', { item });
    };

    getImage($imagen) {
        const image = 'data:image/png;base64,' + $imagen;
        //console.log(image);
        return image;
    }

    render() {
        const { navigation } = this.props;
        const { route } = this.props;
        const item = route.params.item;
        //console.log(item.info);

        return (
            <View style={styles.mainContainer}>
                <Image style={styles.photoPromo} source={{ uri: this.getImage(item.qr) }} />
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <Text style={styles.titlePromo}>{item.nombre}</Text>
                    <View style={styles.containerButton}>
                        <Text style={styles.textButton}>{item.info}</Text>
                    </View>
                    <Text style={styles.promoInfo}>Descuento {item.valor}%</Text>
                </View>
            </View>   
        );
    }
}
