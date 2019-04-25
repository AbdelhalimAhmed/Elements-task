import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../constants';

class FullButton extends Component {
  render() {
    const { loading, style, onPress, textStyle, text } = this.props;
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

FullButton.propTypes = {
  loading: PropTypes.bool,
  style: PropTypes.object,
  onPress: PropTypes.func,
  textStyle: PropTypes.object,
  text: PropTypes.string.isRequired
};

FullButton.defaultProps = {
  loading: false,
  style: {},
  onPress: () => {},
  textStyle: {}
};

export default FullButton;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginVertical: 20,
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.snow
  },
  image: {
    marginHorizontal: 10
  }
});
