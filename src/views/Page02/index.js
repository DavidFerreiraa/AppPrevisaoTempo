import { View, StyleSheet, Text} from "react-native";
import Header02 from "../../components/Header02";
import WeatherDayTemp from "../../components/WeatherDayTemp";

export default function Page02() {
    return (
        <View style={styles.all}>
            <Header02 cidade='Maceió' estado='Alagoas'/>
            <Text style={styles.titulo}>Next 7 days</Text>
            <View style={styles.viewFlex}>
            <WeatherDayTemp icone='white-balance-sunny' color='orange' tempMax='32' tempMin='31°' ano='2022' mes='7' dia='5' diaSemana='1'/>
            <WeatherDayTemp icone='weather-partly-rainy' color='orange' tempMax='24' tempMin='23°' ano='2022' mes='7' dia='6' diaSemana='2'/>
            <WeatherDayTemp icone='weather-cloudy' color='#fff' tempMax='50' tempMin='45°' ano='2022' mes='7' dia='7' diaSemana='3'/>
            <WeatherDayTemp icone='weather-cloudy' color='#fff'tempMax='40' tempMin='38°' ano='2022' mes='7' dia='8' diaSemana='4'/>
            <WeatherDayTemp icone='weather-snowy-rainy' color='blue'tempMax='43' tempMin='43°' ano='2022' mes='7' dia='9' diaSemana='5'/>
            <WeatherDayTemp icone='white-balance-sunny' color='orange'tempMax='41' tempMin='40°' ano='2022' mes='7' dia='10' diaSemana='6'/>
            <WeatherDayTemp icone='weather-partly-rainy' color='orange' tempMax='32' tempMin='30°' ano='2022' mes='7' dia='11' diaSemana='0'/>
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