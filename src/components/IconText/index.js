import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IconText(props) {
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name={props.icone} size={27} color={props.color} style={styles.icone}/>
            <View>
                <Text style={
                    [styles.texto,
                        {fontSize: 11.5}
                    ]
                    }>{props.funcao}</Text>
                <Text style={
                    [styles.texto,
                        {
                            fontSize: 14,
                            fontWeight: 'bold'
                        } 
                    ]
                    }>{props.valor}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center'
    },
    icone: {
        paddingLeft: 10,
        marginRight: 20
    },
    texto: {
        color: '#fff'
    }
})