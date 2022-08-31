import { StyleSheet, View } from "react-native";
import { useState } from "react";

export default function LittleCard(props){

    const [ativo, setAtivo] = useState(props.estado)

    return(
        <View style={ativo? styles.littleCardOn : styles.littleCardOff} onClick={ 
            () => {ativo? setAtivo(false) : setAtivo(true)}}></View>
    );
}

const styles = StyleSheet.create({
    littleCardOn: {
        backgroundColor: '#4A73FC',
        height: '100%',
        width: '20%',
        borderRadius: 15,
        marginHorizontal: 10,
    },
    littleCardOff: {
        backgroundColor: '#fff',
        height: '100%',
        width: '20%',
        borderRadius: 15,
        marginHorizontal: 10,
    }
})
