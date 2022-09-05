import { Image, StyleSheet, Text, View } from "react-native";

export default function Clima(props) {
    return(
        <View style={styles.element}>
            <Image source={require('../../../assets/cloudy.png')} style={styles.icone}/>
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
        marginTop: '10%',
        width: '25%',
        height: '25%'
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
        marginTop: '3%',
        color: '#fff',
        fontSize: 70
    }
})