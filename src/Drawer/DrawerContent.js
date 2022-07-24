import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerView,
  DrawerItem,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Image, Button} from 'react-native';
import {Avatar, Caption, Title, Drawer} from 'react-native-paper';

import ExitIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NewCommunityIcon from 'react-native-vector-icons/Feather';
import FriendAddIcon from 'react-native-vector-icons/AntDesign';
import LanguageIcon from 'react-native-vector-icons/FontAwesome';
import SettingsIcon from 'react-native-vector-icons/Ionicons';
import AboutIcon from 'react-native-vector-icons/AntDesign';

import {DrawerContentStyle} from '../styles/DrawerContent.Style';

export default function DrawerContent({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSignOut = () => {
    AsyncStorage.removeItem('token');
    navigation.navigate('Register');
  };

  useEffect(() => {
    const info = navigation.addListener('focus', () => {
      AsyncStorage.getItem('token').then(token => {
        fetch('http://192.168.0.116:8000/home', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then(res => res.json())
          .then(res => {
            setName(res.name);
            setEmail(res.email);
            setAvatar(res.avatar);
          })
          .catch(err => console.log('Error home', err));
      });
    });

    return info;
  }, [navigation]);

  return (
    <View style={DrawerContentStyle.Main}>
      <DrawerContentScrollView>
        <View style={DrawerContentStyle.DrawerTop}>
          <View style={DrawerContentStyle.UserInfo}>
            <Image
              source={{
                uri: avatar === '' ? 'https://iili.io/VvKa8g.png' : avatar,
              }}
              style={DrawerContentStyle.Avatar}
            />

            <View>
              <Title style={DrawerContentStyle.Title}>{name}</Title>
              <Caption style={DrawerContentStyle.Caption}>{email}</Caption>
            </View>
          </View>
        </View>

        <Drawer.Section style={DrawerContentStyle.DrawerContainer}>
          <DrawerItem
            icon={() => <NewCommunityIcon name="users" size={20} />}
            label="New Community"
            onPress={() => navigation.navigate('NewCommunity')}
          />

          <DrawerItem
            icon={() => <FriendAddIcon name="adduser" size={22} />}
            label="Add friend"
          />

          <DrawerItem
            icon={() => <LanguageIcon name="language" size={22} />}
            label="Language"
          />

          <DrawerItem
            label="Settings"
            icon={() => <SettingsIcon name="settings-outline" size={22} />}
          />

          <DrawerItem
            label="About"
            icon={() => <AboutIcon name="infocirlceo" size={22} />}
          />
        </Drawer.Section>
      </DrawerContentScrollView>

      <DrawerItem
        icon={() => <ExitIcon name="exit-to-app" size={25} />}
        label="Sign Out"
        onPress={handleSignOut}
      />
    </View>
  );
}
