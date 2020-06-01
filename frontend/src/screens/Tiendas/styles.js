import { StyleSheet, Dimensions } from 'react-native';
import { RecipeCard } from '../../AppStyles';
// screen sizing
const { width: viewportWidth } = Dimensions.get('window');
const { height: viewportHeight } = Dimensions.get('window');

// orientation must fixed
const SCREEN_WIDTH = viewportWidth < viewportHeight ? viewportWidth : viewportHeight;

const numColumns = 3;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

const styles = StyleSheet.create({

    container: RecipeCard.container,
    photo: RecipeCard.photo,
    title: RecipeCard.title,
    category: RecipeCard.category,

    containerStore: {
        backgroundColor: 'white',
        flex: 1
    },
    carouselContainer: {
        minHeight: 250
    },
    carousel: {},

    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: 250
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        width: viewportWidth,
        height: 250
    },
    paginationContainer: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        paddingVertical: 8,
        marginTop: 200
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 0
    },
    infoRecipeContainer: {
        flex: 1,
        margin: 25,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    infoPhoto: {
        height: 20,
        width: 20,
        marginRight: -1
    },
    infoRecipe: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    categoryStore: {
        fontSize: 14,
        fontWeight: 'bold',
        margin: 10,
        color: '#2cd18a'
    },
    infoDescriptionRecipe: {
        textAlign: 'left',
        fontSize: 16,
        marginTop: 30,
        margin: 15,
        textAlign: 'justify',
    },
    infoRecipeName: {
        fontSize: 28,
        margin: 10,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    encabezado: {
        width: 200,
        height: 200,
        left: 0,
        top: -40,
    },

    containerPromo: {
        flex: 1,
        alignItems: 'center',
        margin: RECIPE_ITEM_OFFSET,
        marginTop: 30,
        width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
        height: RECIPE_ITEM_HEIGHT + 60
    },
    titlePromo: {
        margin: 10,
        marginBottom: 5,
        color: 'black',
        fontSize: 13,
        textAlign: 'center'
    },
    photoPromo: {
        width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
        height: RECIPE_ITEM_HEIGHT,
        borderRadius: 60
    },

    containerButton: {
        flex: 1,
        height: 50,
        width: 270,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 100,
        borderColor: '#2cd18a',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: '#2cd18a'
    },
    textButton: {
        fontSize: 14,
        color: '#2cd18a'
    }
});

export default styles;
