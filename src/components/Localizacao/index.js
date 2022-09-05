import { StyleSheet, Text, View } from "react-native";

export default function Localizacao(props) {
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
        marginVertical: '10%'
    },
    textoLocal1: {
        padding: 3.2,
        fontWeight: "bold",
        fontFamily: 'monospace',
        fontSize: '1.8em'
    },
    textoLocal2: {
        padding: 3.2,
        fontFamily: 'monospace',
        fontSize: '1.8em'
    }
})