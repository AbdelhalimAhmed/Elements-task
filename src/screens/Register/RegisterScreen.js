// import liraries
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import styles from './RegisterStyle';
import { Input, FullButton } from '../../components';

// create a component
class RegisterScreen extends Component {
  //make state of registers inputs
  state = {
    userName: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  //register user function
  register = () => {
    const { userName, password, firstName, lastName } = this.state;
    //validate on inputs
    if (!userName || !password || !firstName || !lastName) {
      alert('Please fill required fields');
      return;
    }
    const currentUser = {
      userName,
      password,
      firstName,
      lastName
    };
    AsyncStorage.setItem('currentUser', JSON.stringify(currentUser));
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cicleView}>
          <Text style={styles.topText}>{'Register'}</Text>
        </View>

        {/* inputs Fields  */}
        <Input
          placeholder={'user name'}
          onChangeText={text => this.setState({ userName: text })}
        />
        <Input
          placeholder={'password'}
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          placeholder={'first name'}
          onChangeText={text => this.setState({ firstName: text })}
        />
        <Input
          placeholder={'last name'}
          onChangeText={text => this.setState({ lastName: text })}
        />

        {/* Register Button */}
        <View style={styles.section}>
          <FullButton
            style={styles.registerButton}
            text={'Register'}
            onPress={this.register}
          />
        </View>
      </View>
    );
  }
}

// make this component available to the app
export default RegisterScreen;
