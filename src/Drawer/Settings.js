import React from 'react';
import {View, Text, Image} from 'react-native';
import BackArrow from 'react-native-vector-icons/AntDesign';

import {SettingsStyle} from '../styles/Settings.Style';

export default function Settings({navigation}) {
  return (
    <View>
      <View style={SettingsStyle.header}>
        <BackArrow
          name="arrowleft"
          size={30}
          color="#fff"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Image
          source={{uri: 'https://iili.io/jZ9R87.md.webp'}}
        //   source={{uri: 'https://iili.io/VvKa8g.png'}}
          style={SettingsStyle.avatar}
        />
      </View>

      <Text>Settings</Text>
    </View>
  );
}
