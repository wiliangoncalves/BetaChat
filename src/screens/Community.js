import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

import {CommunityStyle} from '../styles/Community.Style';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Community() {
  const [nome, setNome] = useState('1');
  const [name, setName] = useState('');
  // useEffect(() => {
  //   fetch('http://192.168.0.116:8000/community', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log('peguei', res);
  //     })
  //     .catch(err => console.log('Err community get', err));
  // }, []);

  useEffect(() => {
    fetch('http://192.168.0.116:8000/community', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({nome}),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setName(res.name);
      })
      .catch(err => console.log('Error home', err));
  }, [nome]);

  return (
    <View style={CommunityStyle.ComunnityContainer}>
      <Image
        source={{uri: 'https://iili.io/VvKa8g.png'}}
        style={CommunityStyle.CommunityAvatar}
      />
      <Text style={CommunityStyle.ComunnityItem}>{name}</Text>
    </View>
  );
}
