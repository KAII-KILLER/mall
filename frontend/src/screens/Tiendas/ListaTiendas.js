import React from 'react';
import { FlatList, Text, View, Image, TouchableHighlight, ActivityIndicator } from 'react-native';
import styles from './styles';

export default class ListaTiendasScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        };
    };


    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            locales: [],
            url: 'https://d380bdd6c83c.ngrok.io/api/locales',
        }
    }


    async componentDidMount() {

        this.setState({ loading: true })

        try {
            let res = await fetch(this.state.url)
            let data = await res.json()
            this.setState({
                locales: data,
                loading: false,
            })
        } catch (error) {
            console.error();
        }
    }


    onPressStore = item => {
        this.props.navigation.navigate('Tienda', { item });
    };


    renderStores = ({ item }) => (
        <TouchableHighlight underlayColor='transparent' onPress={() => this.onPressStore(item)}>
            <View style={styles.container}>
                <Image style={styles.photo} source={{ uri: item.logotipo }} />
                <Text style={styles.title}>{item.nombre}</Text>
                <Text style={{ top:-15 }}>LOCAL: {item.local}</Text>
            </View>
        </TouchableHighlight>
    );


    render() {

        if (this.state.loading) 
        {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Cargando...</Text>
                    <ActivityIndicator size="large"></ActivityIndicator>
                </View>
            );
        }
        else 
        {
            const { navigation } = this.props;
            const item = null;
            const storesArray = this.state.locales;

            return (
                <View style={{ backgroundColor: "#ffffff", marginBottom: 130 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require("../../assets/images/logojardin300x133.jpg")}
                            resizeMode="contain"
                            style={styles.encabezado}
                        ></Image>
                    </View>

                    <FlatList
                        style={{ top: -90 }}
                        vertical
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={storesArray}
                        renderItem={this.renderStores}
                        keyExtractor={item => `${item.id}`}
                    />
                </View>
            );
        }
    }
}
