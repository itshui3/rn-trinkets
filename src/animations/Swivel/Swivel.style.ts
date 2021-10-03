// external deps
import { StyleSheet } from 'react-native';

export const SwivelStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    block: {
        zIndex: 5,
        height: 275,
        width: 150,
        borderRadius: 30,
        position: 'absolute',
        backgroundColor: 'rgba(20, 220, 220, 0.9)'
    },
    a: {
        top: 0,
        left: 0,
        marginTop: 5,
        marginLeft: 5
    },
    b: {
        top: 0,
        right: 0,
        marginTop: 5,
        marginRight: 5
    },
    c: {
        bottom: 0,
        right: 0,
        marginBottom: 5,
        marginRight: 5
    },
    d: {
        bottom: 0,
        left: 0,
        marginBottom: 5,
        marginLeft: 5
    },
    swivel: {
        position: 'relative',
        height: 200,
        width: 15,
        backgroundColor: 'black'
    }
});
