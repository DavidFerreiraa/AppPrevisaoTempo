import { View, StyleSheet, Text} from "react-native";
import Header02 from "../../components/Header02";
import WeatherDayTemp from "../../components/WeatherDayTemp";

export default function Page02() {
    return (
        <View style={styles.all}>
            <Header02 cidade='Maceió' estado='Alagoas'/>
            <Text style={styles.titulo}>Next 7 days</Text>
            <View style={styles.viewFlex}>
            <WeatherDayTemp icone='rainy' tempMax='32' tempMin='31°'/>
            <WeatherDayTemp icone='rainy' tempMax='32' tempMin='31°'/>
            <WeatherDayTemp icone='rainy' tempMax='32' tempMin='31°'/>
            <WeatherDayTemp icone='rainy' tempMax='32' tempMin='31°'/>
            <WeatherDayTemp icone='rainy' tempMax='32' tempMin='31°'/>
            <WeatherDayTemp icone='rainy' tempMax='32' tempMin='31°'/>
            <WeatherDayTemp icone='rainy' tempMax='32' tempMin='31°'/>
            <WeatherDayTemp icone='rainy' tempMax='32' tempMin='31°'/>
            <WeatherDayTemp icone='rainy' tempMax='32' tempMin='31°'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    all: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#4A73FC',
        padding: '4.5%'
    },
    titulo: {
        color: '#fff',
        marginVertical: '10%',
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    viewFlex: {
        flexDirection: "column",
        gap: 20
    }
})