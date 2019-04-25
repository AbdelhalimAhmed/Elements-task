import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

export default class Input extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            ref='input'
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChangeText={this.props.onChangeText || null}
            style={styles.input}
            secureTextEntry={this.props.secureTextEntry}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'stretch',
    height: 40
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputWrapper: {
    flexDirection: 'row'
  },
  input: {
    width: 350,
    color: 'black',
    fontSize: 16,
    marginLeft: 15,
    flex: 1
  }
})
