import { View } from "react-native";
import { StyleSheet } from "react-native";
import Clima from '../../components/Clima';
import Climazinho from '../../components/Climazinho';

export default function Card(){
    return (
        <View style={styles.card}>
            <Clima/>
            <View style={styles.viewFlex}>
                <Climazinho/>
                <Climazinho/>
                <Climazinho/>
                <Climazinho/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        height: '50vh',
        marginTop: 50,
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