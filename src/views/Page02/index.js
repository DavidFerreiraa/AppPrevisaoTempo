import { View, StyleSheet} from "react-native";
import Header02 from "../../components/Header02";
import Localizacao from "../../components/Localizacao";
export default function Page02() {
    return (
        <View style={styles.all}>
            <Header02 cidade='Maceió' estado='Alagoas'/>
        </View>
    );
}

const styles = StyleSheet.create({
    all: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#4A73FC',
        padding: '3.5%'
    },
})