import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

export default function LittleCard(props){

    const [ativo, setAtivo] = useState(props.estado)

    return(
        <View style={ativo? styles.littleCardOn : styles.littleCardOff} onClick={ 
            () => {ativo? setAtivo(false) : setAtivo(true)}
        }>
            <Text style={ativo? styles.horarioOn : styles.horarioOff}>{props.hora}</Text>
            <Ionicons name={props.clima} size={24} color={ativo? '#fff' : '#0E33FF'} />
            <Text style={ativo? styles.tituloOn : styles.tituloOff}>{props.texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    littleCardOn: {
        borderColor: '#A1ADCE',
        borderWidth: 1,
        backgroundColor: '#4A73FC',
        height: '94%',
        width: '17%',
        borderRadius: 15,
        marginHorizontal: '2.5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 8,
        shadowColor: '#886943',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    littleCardOff: {
        borderColor: '#A1ADCE',
        borderWidth: 1,
        backgroundColor: '#fff',
        height: '94%',
        width: '17%',
        borderRadius: 15,
        marginHorizontal: '2.5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 8,
        shadowColor: '#886943',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    horarioOn: {
        color: '#fff'
    },
    horarioOff: {
        color: '#000'
    },
    tituloOn: {
        color: '#fff',
        fontWeight: 'bold'
    },
    tituloOff: {
        color: '#000',
        fontWeight: 'bold'
    },
})
