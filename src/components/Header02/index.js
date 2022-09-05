import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function Header02(props) {
    return (
        <View style={styles.flexed}>
            <MaterialIcons name="arrow-back-ios" size={20} color="#fff" />
            <View style={styles.flexed}>
                <Text style={styles.textoCidade}>{props.cidade}, </Text><Text>{props.estado}</Text>
            </View>
            <MaterialIcons name="arrow-back-ios" size={20} color="#4A73FC" />
        </View>
    );
}

const styles = StyleSheet.create({
    flexed: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textoCidade: {
        color: '#fff'
    }
})