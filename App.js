import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import InitPage from "./src/views/InitPage";
import Page02 from './src/views/Page02';

export default function App() {
  return (
    <View>
      <Page02/>
      <StatusBar style="auto"/>
    </View>
  );
}

