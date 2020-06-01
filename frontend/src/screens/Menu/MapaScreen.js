import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableOpacity, Image, Dimensions, TouchableHighlight } from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { mapas } from '../../data/dataArrays';


const { width: viewportWidth } = Dimensions.get('window');

export default class RecipeScreen extends React.Component {

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
            activeSlide: 0
        };
    }

    renderImage = ({ item }) => (
        <TouchableHighlight>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item }} />
            </View>
        </TouchableHighlight>
    );


    render() {
        const { activeSlide } = this.state;
        const { navigation } = this.props;
        const item = mapas.photosArray;

        return (
            <ScrollView style={styles.container}>

                <View style={styles.carouselContainer}>
                    <View style={styles.carousel}>
                        <Carousel
                            ref={c => {
                                this.slider1Ref = c;
                            }}
                            data={item}
                            renderItem={this.renderImage}
                            sliderWidth={viewportWidth}
                            itemWidth={viewportWidth}
                            inactiveSlideScale={1}
                            inactiveSlideOpacity={1}
                            firstItem={0}
                            loop={false}
                            autoplay={false}
                            autoplayDelay={500}
                            autoplayInterval={3000}
                            onSnapToItem={index => this.setState({ activeSlide: index })}
                        />
                        <Pagination
                            dotsLength={item.length}
                            activeDotIndex={activeSlide}
                            containerStyle={styles.paginationContainer}
                            dotColor="rgba(0, 0, 0, 0.92)"
                            dotStyle={styles.paginationDot}
                            inactiveDotColor="white"
                            inactiveDotOpacity={0.6}
                            inactiveDotScale={0.6}
                            carouselRef={this.slider1Ref}
                            tappableDots={!!this.slider1Ref}
                        />
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
