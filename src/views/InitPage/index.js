import Localizacao from "../../components/Localizacao"
import Header from '../../components/Header'
import Card from '../../components/Card'
import FooterTitle from '../../components/FooterTitle'
import FooterCards from "../../components/FooterCards"

import { View, StyleSheet } from "react-native";

export default function InitPage() {
    return (
        <View style={styles.all}>
            <View>
                <Header/>
                <Localizacao cidade="Maceió" estado="Alagoas"/>
            </View>
                <Card/>
            <FooterTitle/>
            <FooterCards/>
        </View>
    );
}

const styles = StyleSheet.create({
    all: {
        padding: 10
    },
})