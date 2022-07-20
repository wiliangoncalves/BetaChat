import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerView,
  DrawerItem,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Image, Button} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
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
  // const [token, setToken] = useState('');
  const handleSignOut = () => {
    AsyncStorage.removeItem('token');
    navigation.navigate('Register');
  };

  useEffect(() => {
    const info = navigation.addListener('focus', () => {
      AsyncStorage.getItem('token').then(token => {
        fetch('http://192.168.0.116:8000/home', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify({token}),
        })
          .then(res => res.json())
          .then(res => {
            setName(res.name);
            setEmail(res.email);
          })
          .catch(err => console.log('Error home', err));
      });
    });

    return info;
  }, [navigation]);

  const handleUserInfo = () => {
    AsyncStorage.getItem('token').then(token => {
      fetch('http://192.168.0.116:8000/home', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({token}),
      })
        .then(res => res.json())
        .then(res => {
          setEmail(res.email);
          console.log('peguei home', res);
        })
        .catch(err => console.log('Error home', err));
    });
  };

  return (
    <View style={DrawerContentStyle.Main}>
      <DrawerContentScrollView>
        <View style={DrawerContentStyle.DrawerTop}>
          <View style={DrawerContentStyle.UserInfo}>
            <Image
              source={{uri: 'https://iili.io/jZ9R87.md.webp'}}
              style={DrawerContentStyle.Avatar}
            />

            <View>
              <Title style={DrawerContentStyle.Title}>{name}</Title>
              <Caption style={DrawerContentStyle.Caption}>{email}</Caption>
            </View>
          </View>

          {/* <Drawer.Section
            style={DrawerContentStyle.DrawerContainer}>
            <DrawerItem
              style={DrawerContentStyle.DrawerItemText}
              // icon="star"
              icon={() => <NewCommunityIcon name="users" size={20} />}
              label="New Community"
            />
            <DrawerItem
              style={{backgroundColor: '#64ffda'}}
              label="Second Item"
            />
            <DrawerItem
              style={DrawerContentStyle.DrawerItemText}
              label="Settings"
              icon={() => <SettingsIcon name="settings-outline" size={22} />}
            />
          </Drawer.Section> */}
        </View>

        <Drawer.Section style={DrawerContentStyle.DrawerContainer}>
          <DrawerItem
            // icon="star"
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
