import Localizacao from "../../components/Localizacao"
import Header from '../../components/Header'
import Card from '../../components/Card'

import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function InitPage() {
    return (
        <View style={styles.cabecalho}>
            <Header/>
            <Localizacao cidade="Maceió" estado="Alagoas"/>
            <Card></Card>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        padding: 10
    }
})