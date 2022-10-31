import React from 'react';


import { Text, View, TextInput, ImageBackground,Image ,
    StyleSheet, Dimensions, Button, Pressable , TouchableOpacity} from 'react-native';
  
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
  
const BackgroundImg = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://t4.ftcdn.net/jpg/02/75/92/41/360_F_275924184_GP4ACV80EK8NokxlFaUB2qykpXKrroqx.jpg',
        }}
        resizeMode='repeat'
        style={styles.img}
      >
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://64.media.tumblr.com/a1c1f4614b1c56c49d2b1c25217b4a74/tumblr_nsvri6xqxx1ux1dn3o2_r1_500.gif',
          }}
        ></Image>
        {<></>}
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
        <Button title='testttttttttttt' color='red'>
          <Text>YO</Text>
        </Button>
        {}
        <View style={styles.button}>
          <Button title='testttttttttttt' color='red'>
            <Text>YO</Text>
          </Button>
        </View>
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://64.media.tumblr.com/a1c1f4614b1c56c49d2b1c25217b4a74/tumblr_nsvri6xqxx1ux1dn3o2_r1_500.gif',
          }}
        ></Image>
        <Text>Still here trying</Text>
        <Text>I am learning React-native</Text>
        <Text>I am terrible at it</Text>
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://64.media.tumblr.com/a1c1f4614b1c56c49d2b1c25217b4a74/tumblr_nsvri6xqxx1ux1dn3o2_r1_500.gif',
          }}
        ></Image>

        <Text style={{ backgroundColor: 'yellow' }}>Still here trying</Text>
        <Text style={{ backgroundColor: 'yellow' }}>
          I am learning React-native
        </Text>
        <Text style={{ backgroundColor: 'yellow' }}>I am getting better</Text>
        <Image
          style={{ height: 300, width: 300 }}
          source={{
            uri: 'https://64.media.tumblr.com/a1c1f4614b1c56c49d2b1c25217b4a74/tumblr_nsvri6xqxx1ux1dn3o2_r1_500.gif',
          }}
        ></Image>
        <Text style={{ backgroundColor: 'pink' }}>
          Pretty sure this isn't how you change colors
        </Text>
        <Text style={{ backgroundColor: 'green' }}>
          But its cool all the same
        </Text>
        <Text style={{ backgroundColor: 'red' }}>And pretty fun</Text>
      </ImageBackground>
    </View>
  )
  
};
  
export default BackgroundImg;
  
const styles = StyleSheet.create({
  img: {
    height: 2000,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 5,
    padding: 10,
    borderRadius: 140,
    backgroundColor:'grey'
  
  },
  Insidebutton: {
    height: 40,
    color:'red'

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  
})