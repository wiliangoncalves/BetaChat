import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, BackHandler} from 'react-native';
import {HomeStyle} from '../styles/Home.Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Community from './Community';

export default function Home({navigation}) {
  // console.log('HOME');
  // const [token, setToken] = useState('');
  // AsyncStorage.getItem('token').then(token => {
  //   fetch('http://192.168.0.116:8000/home', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     mode: 'cors',
  //     body: JSON.stringify({token}),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log('peguei home', res);
  //     })
  //     .catch(err => console.log('Error home', err));
  // });

  // useEffect(() => {
  //   console.log('Aqu');
  //   fetch('http://192.168.0.116:8000/home', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     mode: 'cors',
  //     body: JSON.stringify({token}),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       // console.log('peguei home', res);
  //     })
  //     .catch(err => console.log('Error home', err));

  BackHandler.addEventListener('hardwareBackPress', () => {
    return true;
  });
  // });

  return (
    <ScrollView style={HomeStyle.ComunnityContainer}>
      <Community />
    </ScrollView>
  );
}
