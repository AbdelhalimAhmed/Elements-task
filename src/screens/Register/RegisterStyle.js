import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  cicleView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 100
  },
  section: {
    padding: 10,
    alignSelf: 'stretch'
  },
  topText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  registerButton: {
    height: 40,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: Colors.secondryColor
  }
});
