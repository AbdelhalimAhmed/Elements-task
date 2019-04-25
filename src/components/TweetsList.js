import React, { Component } from 'react';
import { Text, StyleSheet, FlatList, Image, View } from 'react-native';
import { Colors } from '../constants';
import PropTypes from 'prop-types';

export default class TweetsList extends Component {
  render() {
    const {
      itemContainer,
      titleContainer,
      titleStyle,
      nameStyle,
      image,
      container,
      contentContainer,
      userContainer,
      desc
    } = styles;
    const { data, refreshing, onRefresh } = this.props;
    return (
      <FlatList
        style={container}
        contentContainerStyle={contentContainer}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item, index }) => {
          const { user, text, created_at } = item;
          const { screen_name, name, profile_image_url_https } = user;
          return (
            <View style={userContainer}>
              <View style={titleContainer}>
                <Image
                  source={{ uri: profile_image_url_https }}
                  style={image}
                />
                <View style={itemContainer}>
                  <Text style={titleStyle}>{name}</Text>
                  <Text style={nameStyle}>@{screen_name}</Text>
                </View>
              </View>
              <Text style={desc}>{text}</Text>
              <Text style={nameStyle}>{created_at}</Text>
            </View>
          );
        }}
      />
    );
  }
}

TweetsList.propTypes = {
  refreshing: PropTypes.bool,
  onRefresh: PropTypes.func,
  data: PropTypes.array.isRequired
};

TweetsList.defaultProps = {
  refreshing: false,
  onRefresh: () => {}
};

const styles = StyleSheet.create({
  userContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 10,
    marginVertical: 7,
    marginHorizontal: 10
  },
  itemContainer: {
    margin: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  titleContainer: {
    flexDirection: 'row'
  },
  titleStyle: {
    fontSize: 14,
    color: 'black'
  },
  desc: {
    fontSize: 16,
    color: 'black',
    marginVertical: 15
  },
  nameStyle: {
    color: 'silver',
    fontSize: 12,
    marginVertical: 4.5
  },
  container: {
    alignSelf: 'stretch'
  },
  contentContainer: {
    paddingBottom: 460,
    backgroundColor: 'white'
  }
});
