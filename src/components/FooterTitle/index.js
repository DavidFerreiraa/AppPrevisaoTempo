import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function FooterTitle(){
    return (
        <View style={styles.container}>
            <Text style={styles.initText}>Today</Text>
            <View style={styles.childContainer}>
                <Text style={styles.secondaryText}>Next 7 Days</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#A1ADCE" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginHorizontal: '2%',
        marginVertical: '6%'
    },
    childContainer: {
        flexDirection: 'row',
    },
    initText: {
        color: '#000',
        fontWeight: 'bold'
    },
    secondaryText: {
        color: '#A1ADCE'
    }
})