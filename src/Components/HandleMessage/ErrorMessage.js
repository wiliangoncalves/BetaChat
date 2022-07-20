import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {HandleMessageStyle} from '../../styles/HandleMessage.Style';

export default function ErrorMessage(props) {
  return (
    <View style={{display: props.show}}>
      <View style={HandleMessageStyle.main}>
        <Text style={HandleMessageStyle.msgError}>{props.handleMessage}</Text>
      </View>
    </View>
  );
}
