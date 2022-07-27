import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {CommunityStyle} from '../styles/Community.Style';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';
import {Title, Caption} from 'react-native-paper';

// Icons
import ArrowLeft from 'react-native-vector-icons/AntDesign';

export default function Community(props) {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const index = props.route.params.index;

  useEffect(() => {
    const Userinfo = navigation.addListener('focus', () => {
      AsyncStorage.getItem('token').then(token => {
        fetch('http://192.168.0.116:8000/community', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.status === 200) {
              setName(res.data[index].community_name);
              setAvatar(res.data[index].community_avatar);
            } else {
              console.log('nothing');
            }
          })
          .catch(err => console.log('Error home', err));
      });
    });

    return Userinfo;
  }, [index, navigation]);

  return (
    <ScrollView>
      <View style={CommunityStyle.CommunityTop}>
        <ArrowLeft
          name="arrowleft"
          color="#fff"
          size={30}
          onPress={() => navigation.navigate('Home')}
        />
        <Image
          source={{uri: avatar === '' ? 'https://iili.io/VvKa8g.png' : avatar}}
          style={CommunityStyle.CommunityAvatar}
        />

        <View style={CommunityStyle.CommunityTopInfo}>
          <Title style={CommunityStyle.CommunityTitle}>{name}</Title>
          <Caption style={CommunityStyle.CommunityMembers}>30 members</Caption>
        </View>
      </View>

      <View>
        <Text>Bottom</Text>
      </View>
    </ScrollView>
  );
}
