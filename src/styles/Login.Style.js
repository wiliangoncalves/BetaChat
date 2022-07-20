import {StyleSheet} from 'react-native';

export const LoginStyle = StyleSheet.create({
  main: {
    width: '80%',
    alignSelf: 'center',
    padding: 15,
    marginTop: 15,
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
  userIcon: {
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    color: 'black',
    paddingBottom: 5,
    marginBottom: 5,
    marginTop: 5,
    top: 15,
    textAlign: 'left',
    left: 5,
  },
  pass: {
    width: '100%',
    color: 'black',
    paddingBottom: 5,
    marginBottom: 5,
    marginTop: 5,
    top: 15,
  },
  loginBottom: {
    marginTop: 50,
  },
  button: {
    marginTop: 50,
    alignSelf: 'center',
  },
  forgotPass: {
    marginTop: 20,
    color: '#2196F3',
  },
});
