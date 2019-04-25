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
  sectionText: {
    textAlign: 'center',
    fontWeight: '500'
  },
  topText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  loginButton: {
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.primaryColor
  },
  registerButton: {
    height: 40,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: Colors.secondryColor
  }
});
