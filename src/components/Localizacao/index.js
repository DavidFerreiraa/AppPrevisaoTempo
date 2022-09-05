import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';

export default function Localizacao(props) {
    const [fontsloaded] = useFonts({
        'Roboto-black': require('../../../assets/fonts/Roboto/Roboto-Black.ttf')
    });
    return (
        <View style={styles.viewFlexed}>
            <Text style={styles.textoLocal1}>{props.cidade},</Text>
            <Text style={styles.textoLocal2}>{props.estado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFlexed: {
        flexDirection: 'row',
        marginTop: '10%'
    },
    textoLocal1: {
        padding: 3.2,
        fontWeight: "bold",
        fontFamily: 'Roboto-black',
        fontSize: '1.8em'
    },
    textoLocal2: {
        padding: 3.2,
        fontFamily: 'Roboto',
        fontSize: '1.8em'
    }
})