import {StyleSheet} from 'react-native';

export const HandleMessageStyle = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  msgError: {
    color: '#dc3545',
    marginRight: 15,
  },
  msgSuccess: {
    color: 'green',
    marginRight: 15,
  },
  close: {
    color: '#dc3545',
    fontSize: 16,
  },
});
