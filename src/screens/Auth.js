import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Auth({navigation}) {
  AsyncStorage.getItem('token').then(token => {
    if (token === null) {
      navigation.navigate('Register');
    } else {
      navigation.navigate('Home');
    }
  });

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
  //       if (token === null) {
  //         navigation.navigate('Register');
  //       } else {
  //         navigation.navigate('Home');
  //       }
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

  //   BackHandler.addEventListener('hardwareBackPress', () => {
  //     return true;
  //   });
  // });

  // AsyncStorage.getItem('token').then(token => {
  //   if (token === null) {
  //     navigation.navigate('Register');
  //   } else {
  //     navigation.navigate('Home');
  //   }
  // });
  return <></>;
}
