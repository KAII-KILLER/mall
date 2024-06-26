import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    categoriesItemContainer: {
        flex: 1,
        margin: 10,
        marginLeft: 45,
        marginRight: 45,
        justifyContent: 'center',
        alignItems: 'center',
        height: 215,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    categoriesPhoto: {     
        width: '100%',
        height: 155,
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    categoriesName: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
        marginTop: 8
    },
    categoriesInfo: {
        marginTop: 3,
        marginBottom: 5
    },
    encabezado: {
        width: 200,
        height: 200,
        left: 0,
        top: -40,
    },
});

export default styles;
