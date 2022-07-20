import {StyleSheet} from 'react-native';

export const RegisterStyle = StyleSheet.create({
  main: {
    width: '80%',
    alignSelf: 'center',
    padding: 15,
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 10,
  },
  text: {
    color: '#fff',
    // backgroundColor: '#2196F3',
    // width: Dimensions.get('screen').width,
    right: 0,
    flexDirection: 'row',
    fontSize: 18,
    left: 35,
    fontFamily: 'sans-serif-medium',
    // padding: 10,
    // textAlign: 'center',
  },
  userIcon: {
    alignSelf: 'center',
  },
  UserNameInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
    paddingBottom: 5,
  },
  ProfileInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
    paddingBottom: 5,
  },
  EmailInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
    paddingBottom: 5,
  },
  PasswordInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
    paddingBottom: 5,
  },
  input: {
    width: '100%',
    color: 'black',
    paddingBottom: 5,
    marginBottom: 5,
    top: 15,
    textAlign: 'left',
    left: 5,
  },
  em: {
    flexDirection: 'row',
    top: 35,
    left: 2,
  },
  lock: {
    flexDirection: 'row',
    top: 29,
  },
  pass: {
    width: '100%',
    color: 'black',
    paddingBottom: 5,
    marginBottom: 5,
    marginTop: 5,
    top: 15,
  },
  registerBottom: {
    marginTop: 20,
  },
  registered: {
    top: 15,
    color: '#2196F3',
  },
});
