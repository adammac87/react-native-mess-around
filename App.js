import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView,Text, View,Image, Button, ImageBackground } from 'react-native';
import BackgroundImg from './Components/BackGroundImage';


export default function App() {
  return (
    <ScrollView style={styles.container}>


      <StatusBar style='auto' />
      <BackgroundImg />
      <Button title='Test'/>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 5,
    padding: 10,
    borderRadius: 140,
    backgroundColor: 'grey',
  },
})
