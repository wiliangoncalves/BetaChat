import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput, Button} from 'react-native';

import {LoginStyle} from '../styles/Login.Style';

import UserIcon from 'react-native-vector-icons/EvilIcons';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import PasswordIcon from 'react-native-vector-icons/AntDesign';

import '../Lang/i18n';
import {useTranslation} from 'react-i18next';

import ErrorMessage from '../Components/HandleMessage/ErrorMessage';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');

  const [showErrorMsg, setShowErrorMsg] = useState('none');

  const [handleMessage, setHandleMessage] = useState('');

  const {t, i18n} = useTranslation();
  const [currentLanguage, setLanguage] = useState('en');
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  const handleLogin = e => {
    fetch('http://192.168.0.116:8000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status >= 400 && res.status <= 499) {
          setShowErrorMsg('flex');

          setTimeout(() => {
            setShowErrorMsg('none');
          }, 3000);
          setHandleMessage(res.message);
        }

        if (res.status >= 200 && res.status <= 299) {
          AsyncStorage.setItem('token', res.token);
          navigation.navigate('Home');
        }
      })
      .catch(err => console.log('Error on Login.js POST Fetch', err));

    e.preventDefault();
  };

  return (
    <ScrollView style={LoginStyle.main}>
      <ErrorMessage show={showErrorMsg} handleMessage={handleMessage} />

      <UserIcon
        name="user"
        size={65}
        color="#2196F3"
        style={LoginStyle.userIcon}
      />

      <View style={LoginStyle.EmailInput}>
        <EmailIcon
          name="email"
          style={LoginStyle.em}
          color="#2196F3"
          size={20}
        />
        <TextInput
          placeholder="E-mail"
          autoCapitalize="none"
          autoCorrect={false}
          style={LoginStyle.input}
          maxLength={30}
          onChangeText={inputEmail => setEmail(inputEmail.trim())}
        />
      </View>

      <View style={LoginStyle.PasswordInput}>
        <PasswordIcon
          name="lock"
          style={LoginStyle.lock}
          color="#2196F3"
          size={25}
        />
        <TextInput
          placeholder={t('password')}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          style={LoginStyle.pass}
          maxLength={20}
          onChangeText={inputPassword => setPassword(inputPassword.trim())}
        />
      </View>

      <View style={LoginStyle.loginBottom}>
        <Button
          title={t('login')}
          style={LoginStyle.button}
          onPress={handleLogin}
        />
        <Text
          style={LoginStyle.forgotPass}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          {t('forgot password?')}
        </Text>
      </View>
    </ScrollView>
  );
}
