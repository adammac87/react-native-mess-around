import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView,Text, View,Image } from 'react-native';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      {
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://64.media.tumblr.com/a1c1f4614b1c56c49d2b1c25217b4a74/tumblr_nsvri6xqxx1ux1dn3o2_r1_500.gif',
          }}
        ></Image>
      }
      <Text>Hi Gang</Text>
      <Text>I am learning React-native</Text>
      <Text>I am terrible at it</Text>
      {
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://64.media.tumblr.com/a1c1f4614b1c56c49d2b1c25217b4a74/tumblr_nsvri6xqxx1ux1dn3o2_r1_500.gif',
          }}
        ></Image>
      }
      <Text>Still here trying</Text>
      <Text>I am learning React-native</Text>
      <Text>I am terrible at it</Text>
      {
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://64.media.tumblr.com/a1c1f4614b1c56c49d2b1c25217b4a74/tumblr_nsvri6xqxx1ux1dn3o2_r1_500.gif',
          }}
        ></Image>
      }
      <Text>This is quite fun tho</Text>
      <Text>I am learning React-native</Text>
      <Text>I am terrible at it</Text>
      {
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://64.media.tumblr.com/a1c1f4614b1c56c49d2b1c25217b4a74/tumblr_nsvri6xqxx1ux1dn3o2_r1_500.gif',
          }}
        ></Image>
      }
      <Text>Very reacty</Text>
      <Text>I am learning React-native</Text>
      <Text>I am terrible at it</Text>
      {
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://64.media.tumblr.com/a1c1f4614b1c56c49d2b1c25217b4a74/tumblr_nsvri6xqxx1ux1dn3o2_r1_500.gif',
          }}
        ></Image>
      }
      <Text>Sup</Text>
      <Text>I am learning React-native</Text>
      <Text>I am terrible at it</Text>

      <StatusBar style='auto' />
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
});
