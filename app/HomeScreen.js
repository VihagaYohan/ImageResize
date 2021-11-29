import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  Dimensions,
  Image,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const {width, height} = Dimensions.get('screen');

// components
import FullWidthImage from './components/FullImage';

const supporteURL = 'https://www.youtube.com/';
//const supporteURL = 'https://google.com';
const imageURL =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80';

const HomeScreen = () => {
  const openURL = async () => {
    const result = await Linking.canOpenURL(supporteURL);
    console.log(result);
    await Linking.openSettings();
    await Linking.openURL(supporteURL);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => {
          openURL();
        }}>
        <Text style={styles.text}>Open URL</Text>
      </TouchableOpacity> */}

      {/* 
      <Image
        source={{uri: imageURL}}
        style={{
          width: width,
          height: responsiveHeight(5),
        }}
      /> */}

      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(50),
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Image
          style={{
            width: 'auto',
            height: '100%',
            aspectRatio: responsiveWidth(100) / responsiveHeight(50),
          }}
          source={{uri: imageURL}}
          resizeMethod="auto"
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(50),
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <FullWidthImage source={{uri: imageURL}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'tomato',
  },
  text: {
    color: 'white',
  },
});

export default HomeScreen;
