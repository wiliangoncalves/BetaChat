import {StyleSheet, Dimensions} from 'react-native';

export const HomeStyle = StyleSheet.create({
  header: {
    backgroundColor: '#2196F3',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Headertext: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
  },
  menu: {
    // display: 'none',
    backgroundColor: 'pink',
    zIndex: 999,
    height: Dimensions.get('screen').height,
    width: '70%',
    position: 'relative',
    top: 0,
    paddingVertical: 1,
  },
  ComunnityContainer: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  ComunnityItem: {
    // top: 10,
    left: 10,
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
