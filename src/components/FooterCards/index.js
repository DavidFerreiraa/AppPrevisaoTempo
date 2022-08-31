import { StyleSheet, View } from 'react-native';
import LittleCard from '../LittleCard'

export default function FooterCards(props){
    return(
        <View style={styles.container}>
            <LittleCard estado={true}></LittleCard>
            <LittleCard></LittleCard>
            <LittleCard></LittleCard>
            <LittleCard></LittleCard>
            <LittleCard></LittleCard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '23%',
        backgroundColor: '#fff',
        flexDirection: 'row'
    }
})