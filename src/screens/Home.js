import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  BackHandler,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HomeStyle} from '../styles/Home.Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [show, setShow] = useState('none');

  const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState([]);

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
              const datas = res.data;

              for (let i = 0; i < res.data.length; i++) {
                setCount(res.data[i]);
              }

              // for (let i = 0; i < count; i++) {
              //   datas[i] = {
              //     number: i + 1,
              //     description: `desc${i}`,
              //   };
              // }
              setItems(datas);
              setShow('flex');
            } else {
              setShow('none');
              console.log('empty community');
            }
          })
          .catch(err => console.log('Error home', err));
      });
    });

    return info;
  }, [count, navigation]);

  function Box({item, index}) {
    const handleCommunity = () => {
      navigation.navigate('Community', {item, index});
    };

    return (
      <>
        <TouchableOpacity onPress={handleCommunity}>
          <View style={[HomeStyle.ComunnityContainer, {display: `${show}`}]}>
            <Image
              source={{
                uri:
                  item.community_avatar === ''
                    ? 'https://iili.io/VvKa8g.png'
                    : item.community_avatar,
              }}
              style={HomeStyle.CommunityAvatar}
            />
            <Text style={HomeStyle.ComunnityItem}>{item.community_name}</Text>

            <View style={HomeStyle.CommunityData}>
              <Text>00:00</Text>
              <Text style={HomeStyle.CommunityDataPosts}>10</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <ScrollView>
      {items.map((item, index) => (
        <Box item={item} index={index} key={index} />
      ))}
    </ScrollView>
  );
}
