import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, Button} from 'react-native';

import {NewCommunityStyle} from '../styles/NewCommunity.Style';

import ErrorMessage from '../Components/HandleMessage/ErrorMessage';

// Icons
import ArrowLeft from 'react-native-vector-icons/AntDesign';
import CameraIcon from 'react-native-vector-icons/EvilIcons';

export default function NewCommunity({navigation}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [showErrorMsg, setShowErrorMsg] = useState('none');

  const [handleMessage, setHandleMessage] = useState('');

  const handleCreateCommunity = () => {
    fetch('http://192.168.0.116:8000/community', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        name,
        description,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <View>
      <View style={NewCommunityStyle.UploadTop}>
        <ArrowLeft
          name="arrowleft"
          color="#fff"
          size={30}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={NewCommunityStyle.UploadTitle}>New Community</Text>
      </View>

      <ScrollView style={NewCommunityStyle.main}>
        <ErrorMessage show={showErrorMsg} handleMessage={handleMessage} />

        <CameraIcon
          name="camera"
          size={30}
          color="#fff"
          style={NewCommunityStyle.img}
        />

        <View style={NewCommunityStyle.CommunityNameInput}>
          <TextInput
            placeholder="Enter community name"
            autoCapitalize="none"
            autoCorrect={false}
            style={NewCommunityStyle.input}
            maxLength={25}
            onChangeText={inputCommunityName =>
              setName(inputCommunityName.trim())
            }
          />
        </View>

        <View style={NewCommunityStyle.BioInput}>
          <View style={NewCommunityStyle.textAreaContainer}>
            <TextInput
              style={NewCommunityStyle.textArea}
              underlineColorAndroid="transparent"
              placeholder="Description (Optional) max 100 characters"
              placeholderTextColor="grey"
              numberOfLines={3}
              maxLength={100}
              multiline={true}
              onChangeText={inputCommunityDescription =>
                setDescription(inputCommunityDescription.trim())
              }
            />
          </View>
        </View>

        <View style={NewCommunityStyle.CommunityBottom}>
          <Button title="Create" onPress={handleCreateCommunity} />
        </View>
      </ScrollView>
    </View>
  );
}
