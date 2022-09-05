import { View } from "react-native";
import { StyleSheet } from "react-native";
import Clima from '../../components/Clima';
import Climazinho from '../../components/Climazinho';

export default function Card(){
    return (
        <View style={styles.card}>
            <Clima climaIcon=''clima='Weavy Rain' dia='Sunday' data={new Date().getMonth()} temperatura='24°'/>
            <View style={styles.viewFlex}>
                <Climazinho Top='1' Right='1' icone='weather-windy' funcao='WIND' valor='19.2km/j' color='#fff'/>
                <Climazinho Top='1' icone='thermometer' funcao='FEELS LIKE' valor='30°' color='#fff'/>
                <Climazinho Top='1' Right='1' icone='white-balance-sunny' funcao='INDEX UV' valor='2' color='#fff'/>
                <Climazinho Top='1' icone='triangle-wave' funcao='PRESSURE' valor='1014 mbar' color='#fff'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        height: '50vh',
        marginHorizontal: 'auto',
        backgroundColor: '#4A73FC',
        borderRadius: 15,
        shadowColor: '#886943',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    viewFlex: {
        height: '30%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    
})