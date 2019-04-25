import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';
import TabBarIcon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../screens/Profile';
import TweetsScreen from '../screens/Tweets';
import { Colors } from '../constants';
import {
  defaultDrawerNavigationOptions,
  CustomDrawerContentComponent
} from './NavigationComponents';

//create profile screen as stack on navigation
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  { defaultNavigationOptions: defaultDrawerNavigationOptions }
);

ProfileStack.navigationOptions = {
  drawerLabel: 'Profile',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      color={focused ? Colors.primaryColor : Colors.tabIconDefault}
      name={`user-circle${focused ? '-o' : ''}`}
      size={22}
    />
  )
};

//create tweets screen as stack on navigation
const TweetsStack = createStackNavigator(
  {
    Tweets: TweetsScreen
  },
  { defaultNavigationOptions: defaultDrawerNavigationOptions }
);

TweetsStack.navigationOptions = {
  drawerLabel: 'Tweets',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      color={focused ? Colors.primaryColor : Colors.tabIconDefault}
      name={'certificate'}
      size={22}
    />
  )
};

export default createDrawerNavigator(
  {
    TweetsStack,
    ProfileStack
  },
  {
    initialRouteName: 'TweetsStack',
    contentComponent: CustomDrawerContentComponent
  }
);
