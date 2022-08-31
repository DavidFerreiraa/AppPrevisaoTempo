import { StyleSheet, View } from 'react-native';
import LittleCard from '../LittleCard'
import { ScrollView } from 'react-native-web';

export default function FooterCards(props){
    return(
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <LittleCard estado={true} hora='12:00' clima={'md-cloudy'} texto='Now'></LittleCard>
                <LittleCard hora='12:00' clima={'md-cloudy'} texto='Now'></LittleCard>
                <LittleCard hora='12:00' clima={'md-cloudy'} texto='Now'></LittleCard>
                <LittleCard hora='12:00' clima={'md-cloudy'} texto='Now'></LittleCard>
                <LittleCard hora='12:00' clima={'md-cloudy'} texto='Now'></LittleCard>
                <LittleCard hora='12:00' clima={'md-cloudy'} texto='Now'></LittleCard>
                <LittleCard hora='12:00' clima={'md-cloudy'} texto='Now'></LittleCard>
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