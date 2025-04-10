import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#303033',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        backgroundColor: '#222',
        color: '#fff',
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
    },
    swapIcon: {
        textAlign: 'center',
        marginVertical: 15,
    },
    result: {
        color: '#ffffff',
        marginTop: 30,
        fontSize: 16,
        textAlign: 'center',
    },
    convertedText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

const pickerSelectStyles = {
    inputIOS: {
        backgroundColor: '#222',
        color: '#fff',
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
    },
    inputAndroid: {
        backgroundColor: '#222',
        color: '#fff',
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
    },
};

export { styles, pickerSelectStyles };