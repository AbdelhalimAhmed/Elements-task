//import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import styles from './ProfileStyle';
import { FullButton } from '../../components';
import twitter from 'react-native-simple-twitter';

// create a component
class ProfileScreen extends Component {
  state = {
    user: {},
    loading: true
  };
  async componentDidMount() {
    var endpoint = 'statuses/home_timeline.json';

    var consumer_key = 'TQGBzMl4qA14lfjDugIMk9OxP';
    var consumer_key_secret =
      'Umc3wxTnoyFbkyMzUDphAmVwNxTWTQWY5eMYD0p2epqit6rx77';

    var access_token = '1121413064413384704-KxOWB8aa5fxGLAOxiwYeVsBEPiVb5N';
    var access_token_secret = 'yTgQ780BKw2X8yptv2gNe1f4GL69gFxgRXNGsTWKqackL';

    await twitter.setConsumerKey(consumer_key, consumer_key_secret);
    await twitter.setAccessToken(access_token, access_token_secret);
    const data = await twitter.get(endpoint, {});
    console.log('pleasss---->', data);
    const user = await AsyncStorage.getItem('currentUser');
    this.setState({ user: JSON.parse(user), loading: false });
  }
  render() {
    // spread all the props
    const { user, loading } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Text style={styles.text}>User Name: {user.userName}</Text>
            <Text style={styles.text}>First Name: {user.firstName}</Text>
            <Text style={styles.text}>Last Name: {user.lastName}</Text>
          </View>
        )}
      </View>
    );
  }
}

//make this component available to the app
export default ProfileScreen;
