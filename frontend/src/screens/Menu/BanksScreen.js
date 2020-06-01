import React from 'react';
import { FlatList, Text, View, Image, TouchableHighlight } from 'react-native';
import styles from '../styles';
import { bancos } from '../../data/dataArrays';


export default class Bankscreen extends React.Component {

    static navigationOptions = {
        title: 'Tiendas'
    };

    constructor(props) {
        super(props);
    }

    onPressCategory = item => {
        const title = item.name;
        const category = item;
        this.props.navigation.navigate('RecipesList', { category, title });
    };

    renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor='transparent' /*onPress={() => this.onPressCategory(item)}*/>
            <View style={styles.categoriesItemContainer}>
                <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
                <Text style={styles.categoriesName}>{item.name}</Text>
            </View>
        </TouchableHighlight>
    );

    render() {
        return (
            <View style={{ backgroundColor: "#ffffff", marginBottom: 130 }}>

                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require("../../assets/images/logojardin300x133.jpg")}
                        resizeMode="contain"
                        style={styles.encabezado}
                    ></Image>
                </View>

                <FlatList style={{ top:-90 }}
                    data={bancos}
                    renderItem={this.renderCategory}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        );
    }
}

