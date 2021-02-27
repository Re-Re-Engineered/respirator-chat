import 'react-native-gesture-handler';
import React, {ReactPropTypes} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, Button} from 'react-native';

import AppBar from './components/AppBar';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <AppBar /> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
