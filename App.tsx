import 'react-native-gesture-handler';
import React, {ReactPropTypes} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, Button} from 'react-native';

import AppBar from './components/AppBar';

declare const global: {HermesInternal: null | {}};

const getFullName = (...args: string[]): string => args.join(' ');

const Stack = createStackNavigator();

type ColumnProps = {
  children: React.ReactNode;
};

const Column = (props: ColumnProps) => {
  const trueProps = {...props, children: null};
  const style = {flexDirection: 'column'};
  const {children} = props;
  return (
    <View {...style} {...trueProps}>
      {children}
    </View>
  );
};

type NavButtonProps = {
  title: string;
  style?: any;
  onPress: any;
};

const NavButton = (props: NavButtonProps) => {
  const {title, onPress} = props;
  const style = props.style || {};
  return <Button {...style} title={title} onPress={onPress} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}: any) => {
  return (
    <Column>
      <Text>Hello, I am {getFullName('Arjun', 'Raju', 'Pillai')}</Text>
      <NavButton
        title="Go to Arjun's Profile"
        onPress={() => navigation.navigate('Profile', {name: 'Arjun'})}
      />
      {/* <Button
        title="Go to Arjun's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Arjun' })}
      /> */}
    </Column>
  );
};

const ProfileScreen = ({navigation, route}: any) => {
  return (
    <Column>
      <Text>This is {route.params.name}'s profile</Text>
      <NavButton
        title="Go back to home page"
        onPress={() => navigation.navigate('Home')}
      />
    </Column>
  );
};

export default App;
