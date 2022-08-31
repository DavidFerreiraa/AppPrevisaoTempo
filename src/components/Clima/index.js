import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function Clima(props) {
    return(
        <View style={styles.element}>
            <Ionicons name='rainy' size={70} color="#fff" style={styles.icone}/>
            <Text style={styles.titulo}>{props.clima}</Text>
            <Text style={styles.paragrafo}>{props.dia}, {props.data}</Text>
            <Text style={styles.temperaturastyle}>{props.temperatura}</Text>
        </View>
    );

}


const styles = StyleSheet.create({
    element:{
        flexDirection: 'column',
        height: '70%',
        width: '100%',
        alignItems: 'center'
    },
    icone: {
        marginTop: 50
    },
    titulo: {
        color: '#fff',
        fontSize: 20
    },
    paragrafo: {
        color: '#A1ADCE',
        fontSize: 12
    },
    temperaturastyle: {
        marginTop: 15,
        color: '#fff',
        fontSize: 70
    }
})