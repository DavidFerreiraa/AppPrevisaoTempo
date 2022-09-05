import { View, StyleSheet, Text} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IconText from "../IconText";

export default function WeatherDayTemp(props) {

    const dayName = ["Domingo", "Segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
    const monName = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Ago", "Out", "Nov", "Dez"]

    return (
        <View style={styles.viewFlex}>
            <IconText icone={props.icone} color={props.color}></IconText>
            <View style={styles.viewFlexChild}>
            <View style={styles.viewFlex}>
                <Text style={styles.textStrong}>{dayName[props.diaSemana]}, </Text>
                <Text style={styles.textLight}>{props.dia} {monName[props.mes]}</Text>
            </View>
            <View style={styles.viewFlex}>
                <Text style={[styles.textStrong, {fontSize: 20}]}>{props.tempMax} </Text>
                <Text style={styles.textLight}>/ {props.tempMin}</Text>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'
    },
    viewFlexChild: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%'
    },
    textStrong: {
        color: '#fff',
        fontWeight: 'bold'
    },
    textLight: {
        color: '#A1ADCE',
    }
})