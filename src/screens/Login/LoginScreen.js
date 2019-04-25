import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';

import { Input, FullButton } from '../../components';

// Styles
import styles from './LoginStyle';

export default class LoginScreen extends Component {
  //state of inputs
  state = {
    userName: '',
    password: '',
    loading: false
  };

  //login function
  login = async () => {
    this.setState({ loading: true });
    const { userName, password } = this.state;
    if (!userName || !password) {
      alert('please fill required fields');
      this.setState({ loading: false });

      return;
    }
    // get user from database
    const user = await AsyncStorage.getItem('currentUser');
    const jsonUser = JSON.parse(user);
    this.setState({ loading: false });

    //check user name mateches current user name
    if (
      !jsonUser ||
      jsonUser.userName !== userName ||
      jsonUser.password !== password
    ) {
      alert('user name or password is wrong');
      return;
    }
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cicleView}>
          <Text style={styles.topText}>{'Login'}</Text>
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

        {/* Login Button  */}
        <FullButton
          style={styles.loginButton}
          text={'Login Now'}
          onPress={this.login}
        />

        {/* Register Button */}
        <View style={styles.section}>
          <Text style={styles.sectionText}>{'OR REGISTER'}</Text>
          <FullButton
            loading={this.state.loading}
            style={styles.registerButton}
            text={'Register'}
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>
      </View>
    );
  }
}
