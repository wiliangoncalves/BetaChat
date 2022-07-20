import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import {RegisterStyle} from '../styles/Register.Style';
import {GenericStyles} from '../styles/Generic.Styles';

import UserIcon from 'react-native-vector-icons/EvilIcons';

import '../Lang/i18n';
import {useTranslation} from 'react-i18next';

import ErrorMessage from '../Components/HandleMessage/ErrorMessage';
import SuccessMessage from '../Components/HandleMessage/SuccessMessage';

export default function Register({navigation}) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_password, setRepeat_password] = useState('');

  const [showErrorMsg, setShowErrorMsg] = useState('none');
  const [showSuccesMsg, setShowSuccessMsg] = useState('none');

  const [handleMessage, setHandleMessage] = useState('');

  const {t, i18n} = useTranslation();
  const [currentLanguage, setLanguage] = useState('en');
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  const handleRegister = e => {
    fetch('http://192.168.0.116:8000/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        repeat_password,
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
          setShowSuccessMsg('flex');

          setTimeout(() => {
            setShowSuccessMsg('none');
          }, 3000);
          setHandleMessage(res.message);
        }
      })
      .catch(err => console.log('Error on Register.js POST Fetch', err));

    e.preventDefault();
  };

  return (
    <>
      <View style={RegisterStyle.header}>
        <Text style={RegisterStyle.text}>Register</Text>
      </View>

      <View style={RegisterStyle.main}>
        <ErrorMessage show={showErrorMsg} handleMessage={handleMessage} />
        <SuccessMessage show={showSuccesMsg} handleMessage={handleMessage} />
        <UserIcon
          name="user"
          size={60}
          color="#2196F3"
          style={RegisterStyle.userIcon}
        />
        {/* <Button title="En" onPress={() => changeLanguage('en')} />
        <Button title="Pt-Br" onPress={() => changeLanguage('pt')} />
        <Button title="Fr" onPress={() => changeLanguage('fr')} /> */}
        <View style={RegisterStyle.ProfileInput}>
          <TextInput
            placeholder={t('name')}
            autoCapitalize="none"
            autoCorrect={false}
            style={RegisterStyle.input}
            maxLength={10}
            onChangeText={inputProfile => setName(inputProfile.trim())}
          />
        </View>

        <View style={RegisterStyle.UserNameInput}>
          <TextInput
            placeholder={t('username')}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={20}
            style={RegisterStyle.input}
            onChangeText={inputUsername => setUsername(inputUsername.trim())}
          />
        </View>

        <View style={RegisterStyle.EmailInput}>
          <TextInput
            placeholder="E-mail"
            autoCapitalize="none"
            autoCorrect={false}
            style={RegisterStyle.input}
            maxLength={32}
            onChangeText={inputEmail => setEmail(inputEmail.trim())}
          />
        </View>

        <View style={RegisterStyle.PasswordInput}>
          <TextInput
            placeholder={t('password')}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            style={RegisterStyle.input}
            maxLength={20}
            onChangeText={inputPassword => setPassword(inputPassword.trim())}
          />
        </View>

        <View style={RegisterStyle.PasswordInput}>
          <TextInput
            placeholder={t('repeat_password')}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            style={RegisterStyle.input}
            maxLength={20}
            onChangeText={inputRepeatPassword =>
              setRepeat_password(inputRepeatPassword.trim())
            }
          />
        </View>

        <View style={RegisterStyle.registerBottom}>
          <Button
            title={t('register')}
            style={RegisterStyle.button}
            onPress={handleRegister}
          />
          <Text
            style={RegisterStyle.registered}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            {t('already registered?')} | Login
          </Text>
        </View>
      </View>
    </>
  );
}
