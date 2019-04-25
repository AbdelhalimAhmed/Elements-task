//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import twitter from 'react-native-simple-twitter';

import { TweetsList } from '../../components';
import styles from './TweetsStyle';

// create a component
class TweetsScreen extends Component {
  state = {
    loading: true,
    refreshing: false
  };

  async componentDidMount() {
    await this.getTweets();
  }

  //fumction to get tweets from twitter api
  getTweets = async isRefresh => {
    //check if is refresh don't show loading
    if (!isRefresh) {
      this.setState({ loading: true });
    }

    //config twitter clint api to get Outh0
    var endpoint = 'statuses/home_timeline.json';
    var consumer_key = 'TQGBzMl4qA14lfjDugIMk9OxP';
    var consumer_key_secret =
      'Umc3wxTnoyFbkyMzUDphAmVwNxTWTQWY5eMYD0p2epqit6rx77';
    var access_token = '1121413064413384704-KxOWB8aa5fxGLAOxiwYeVsBEPiVb5N';
    var access_token_secret = 'yTgQ780BKw2X8yptv2gNe1f4GL69gFxgRXNGsTWKqackL';
    await twitter.setConsumerKey(consumer_key, consumer_key_secret);
    await twitter.setAccessToken(access_token, access_token_secret);

    //then get the timlines tweents
    const data = await twitter.get(endpoint, {});
    this.setState({ data: data, loading: false, refreshing: false });
  };

  //pull to refresh tweets
  handlRefresh = () => {
    this.setState({ refreshing: true }, () => this.getTweets(true));
  };

  render() {
    const { loading, data, refreshing } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <TweetsList
            data={data}
            refreshing={refreshing}
            onRefresh={this.handlRefresh}
          />
        )}
      </View>
    );
  }
}

//make this component available to the app
export default TweetsScreen;
