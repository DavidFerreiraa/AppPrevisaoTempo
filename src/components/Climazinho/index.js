import { StyleSheet, View } from "react-native";

export default function Climazinho() {
    return(
        <View style={styles.element}></View>
    );
}


const styles = StyleSheet.create({
    element: {
        height: '50%',
        width: '50%',
        borderTopColor: '#fff',
        borderTopWidth: 1,
        borderRightColor: '#fff',
        borderRightWidth: 1,
        
    }
})