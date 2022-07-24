import {StyleSheet} from 'react-native';

export const CommunityStyle = StyleSheet.create({
  ComunnityContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // backgroundColor: 'pink',
  },
  CommunityAvatar: {
    width: 48,
    height: 48,
    borderRadius: 30,
    left: 25,
    color: '#fff',
  },
  CommunityTop: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 5,
  },
  CommunityTopInfo: {
    left: 40,
  },
  CommunityTitle: {
    color: '#fff',
    fontSize: 14,
    top: 5,
  },
  CommunityMembers: {
    color: '#fff',
    top: -5,
  },
});
