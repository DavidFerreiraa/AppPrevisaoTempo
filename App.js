import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import InitPage from "./src/views/InitPage";
import Page02 from './src/views/Page02';

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Page02/>
      </NavigationContainer>
      <StatusBar style="auto"/>
    </View>
  );
}

