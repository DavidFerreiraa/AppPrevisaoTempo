import { View } from "react-native";
import { StyleSheet } from "react-native";
import Clima from '../../components/Clima';
import Climazinho from '../../components/Climazinho';

export default function Card(){
    return (
        <View style={styles.card}>
            <Clima clima='Weavy Rain' dia='Sunday' data='02 Oct.' temperatura='24°'/>
            <View style={styles.viewFlex}>
                <Climazinho Top='1' Right='1' icone='partly-sunny-sharp' funcao='WIND' valor='19.2km/j'/>
                <Climazinho Top='1' icone='thermometer' funcao='FEELS LIKE' valor='30°'/>
                <Climazinho Top='1' Right='1' icone='sunny' funcao='INDEX UV' valor='2'/>
                <Climazinho Top='1' icone='speedometer' funcao='PRESSURE' valor='1014 mbar'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        height: '50vh',
        marginVertical: 50,
        marginHorizontal: 'auto',
        backgroundColor: '#4A73FC',
        borderRadius: 15
    },
    viewFlex: {
        height: '30%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    
})