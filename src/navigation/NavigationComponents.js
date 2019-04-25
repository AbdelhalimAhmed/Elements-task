import React from 'react';
import { StyleSheet, ScrollView, Text, AsyncStorage } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Colors } from '../constants';
import { MenuButton } from '../components';

//set default drawer navigation header
export const defaultDrawerNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerLeft: <MenuButton />,
  headerTintColor: '#fff',
  headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flex: 1 }
};

export const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};

//we need to customes on drawer component so we create that
export const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
      <Text
        style={styles.logout}
        onPress={() => {
          AsyncStorage.clear();
          props.navigation.navigate('Auth');
        }}
      >
        LOGOUT
      </Text>
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logout: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
