import {StyleSheet} from 'react-native';

export const DrawerContentStyle = StyleSheet.create({
  Main: {
    flex: 1,
  },
  DrawerTop: {
    top: -4,
    // left: 20,
    width: '100%',
    position: 'relative',
    backgroundColor: '#2196F3',
  },
  UserInfo: {
    top: 5,
    left: 20,
    paddingBottom: 10,
  },
  Title: {
    fontSize: 16,
    marginTop: 3,
    color: '#fff',
    // fontWeight: 'bold',
    // fontFamily: 'Roboto',
  },
  Caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#eee',
  },
  Avatar: {
    width: 42,
    height: 42,
    borderRadius: 25,
  },
  DrawerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 15,
    borderTopWidth: 1,
    borderTopColor: '#f4f4f4',
  },
  DrawerBottomText: {
    left: 25,
  },
  DrawerContainer: {
    right: 0,
    top: 0,
    marginBottom: 25,
  },
});
