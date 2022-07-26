import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, BackHandler, Image} from 'react-native';
import {HomeStyle} from '../styles/Home.Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Community from './Community';

import {CommunityStyle} from '../styles/Community.Style';

import {useNavigation} from '@react-navigation/native';
import {Title} from 'react-native-paper';

export default function Home() {
  const navigation = useNavigation();
  const [communitys, setCommunitys] = useState(0);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [show, setShow] = useState('none');

  BackHandler.addEventListener('hardwareBackPress', () => {
    return true;
  });

  useEffect(() => {
    const info = navigation.addListener('focus', () => {
      AsyncStorage.getItem('token').then(token => {
        fetch('http://192.168.0.116:8000/community', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.status === 200) {
              setName(res.name);
              setAvatar(res.avatar);
              setShow('flex');

              let items = [];

              for (let i = 0; i < res.data.length; i++) {
                items.push(res.data[i]);
              }

              items.forEach(element => {
                console.log(element);
              });
            } else {
              setShow('none');
              console.log('empty community');
            }
          })
          .catch(err => console.log('Error home', err));
      });
    });

    return info;
  }, [navigation]);

  const handleCommunity = () => {
    navigation.navigate('Community');
  };

  return (
    <ScrollView>
      <View style={[HomeStyle.ComunnityContainer, {display: `${show}`}]}>
        <Image
          source={{uri: avatar === '' ? 'https://iili.io/VvKa8g.png' : avatar}}
          style={HomeStyle.CommunityAvatar}
        />
        <Text style={HomeStyle.ComunnityItem} onPress={handleCommunity}>
          {name}
        </Text>
      </View>
    </ScrollView>
  );
}
