import { StyleSheet, View } from 'react-native';
import LittleCard from '../LittleCard'
import { ScrollView } from 'react-native-web';

export default function FooterCards(props){
    return(
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <LittleCard estado={true} hora='12:00' clima='weather-cloudy' texto='Now' color='#fff'></LittleCard>
                <LittleCard hora='10:00' clima='white-balance-sunny' texto='Ensolar.' color='orange'></LittleCard>
                <LittleCard hora='15:00' clima='weather-partly-rainy' texto='Chuva' color='orange'></LittleCard>
                <LittleCard hora='12:30' clima='weather-cloudy' texto='Nublad.' color='#fff'></LittleCard>
                <LittleCard hora='14:00' clima='weather-snowy-rainy' texto='Neve' color='#fff'></LittleCard>
                <LittleCard hora='16:30' clima='white-balance-sunny' texto='Ensolar.' color='orange'></LittleCard>
                <LittleCard hora='9:00' clima='weather-partly-rainy' texto='Chuva' color='orange'></LittleCard>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '22%',
        backgroundColor: '#fff',
        flexDirection: 'row'
    }
})