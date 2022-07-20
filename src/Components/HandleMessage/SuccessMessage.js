import React from 'react';
import {View, Text} from 'react-native';

import {HandleMessageStyle} from '../../styles/HandleMessage.Style';

export default function SuccessMessage(props) {
  return (
    <View style={{display: props.show}}>
      <View style={HandleMessageStyle.main}>
        <Text style={HandleMessageStyle.msgSuccess}>{props.handleMessage}</Text>
      </View>
    </View>
  );
}
