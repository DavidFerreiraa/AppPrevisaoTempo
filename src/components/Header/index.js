import { View } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

export default function Header(){
    return (
        <View style={styles.cabecalho}>
            <Entypo name="menu" size={27} color="black"/>
            <Feather name="more-horizontal" size={27} color="black"/>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})