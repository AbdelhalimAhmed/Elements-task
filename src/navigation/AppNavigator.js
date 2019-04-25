import React from 'react';
import { View, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

class AuthLoadingScreen extends React.Component {
  static router = AuthNavigator.router; // we should search about this

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the user from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // AsyncStorage.clear()
    const user = await AsyncStorage.getItem('currentUser');
    console.log('user', JSON.parse(user));
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(user ? 'Main' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const AppNav = createSwitchNavigator({
  // You could add another route here for any stack you want.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  Auth: AuthNavigator,
  Main: MainTabNavigator
});

export default createAppContainer(AppNav);
