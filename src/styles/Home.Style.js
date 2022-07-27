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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 10,
    paddingBottom: 5,
    // backgroundColor: 'pink',
  },
  CommunityAvatar: {
    width: 48,
    height: 48,
    borderRadius: 30,
  },
  ComunnityItem: {
    left: 10,
    marginTop: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  CommunityData: {
    position: 'absolute',
    right: 10,
    alignItems: 'center',
  },
  CommunityDataPosts: {
    color: '#fff',
    backgroundColor: '#2196F3',
    borderRadius: 30,
    padding: 3,
  },
});
