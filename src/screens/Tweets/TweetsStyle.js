import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 16,
    color: Colors.primaryColor,
    marginVertical: 10
  }
});
