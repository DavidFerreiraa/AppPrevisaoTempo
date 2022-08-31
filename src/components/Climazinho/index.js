import { StyleSheet, View } from "react-native";

import IconText from '../IconText'

export default function Climazinho(props) {
    return(
        <View style={
            [styles.element, {
                borderTopWidth: Number(props.Top),
                borderRightWidth: Number(props.Right),
                borderBottomWidth: Number(props.Bottom),
                borderLeftWidth: Number(props.Left)
            }]
        }>
            <IconText icone={props.icone} funcao={props.funcao} valor={props.valor}></IconText>
        </View>
    );
}


const styles = StyleSheet.create({
    element: {
        height: '50%',
        width: '50%',
        borderColor: '#fff',
    }
})