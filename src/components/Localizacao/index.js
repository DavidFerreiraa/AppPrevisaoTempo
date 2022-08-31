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
        marginTop: 45
    },
    textoLocal1: {
        padding: 3.2,
        fontWeight: "bold",
        fontSize: '1.1em'
    },
    textoLocal2: {
        padding: 3.2,
        fontSize: '1.1em'
    }
})