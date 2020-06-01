import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        borderBottomColor: 'grey'
    },
    titlePromo: {
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 27
    },
    photoPromo: {
        width: '100%',
        height: '72%',
        alignSelf: 'center'
    },
    promoInfo: {
        color: 'black',
        margin: 10,
        fontSize: 19,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    containerButton: {
        flex: 1,
        height: 50,
        width: 270,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 100,
        borderColor: '#2cd18a',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 27,
        // backgroundColor: '#2cd18a'
    },
    textButton: {
        fontSize: 17,
        color: '#2cd18a',
    },
    container: RecipeCard.container,
    photo: RecipeCard.photo,
    title: RecipeCard.title,
    category: RecipeCard.category
});

export default styles;
