import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';

class MenuButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.openDrawer()}
        style={{
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10
        }}
      >
        <Icon name={'menu'} size={30} color={'white'} />
      </TouchableOpacity>
    );
  }
}
export default withNavigation(MenuButton);
