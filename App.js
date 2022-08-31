import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import InitPage from "./src/views/InitPage";

export default function App() {
  return (
    <View>
      <InitPage/>
      <StatusBar style="auto"/>
    </View>
  );
}

