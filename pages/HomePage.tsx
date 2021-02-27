import React from 'react';
import { Text } from 'react-native';

import Column from '../components/reusable/Column';
import NavButton from '../components/reusable/NavButton';

import AppBar from '../components/AppBar';
import ConversationList from '../components/ConversationList';

const getFullName = (...args: string[]): string => args.join(' ');

const HomeScreen = ({navigation}: any) => {
  return (
    <Column>
      <AppBar />
      <Text>Hello, I am {getFullName('Arjun', 'Raju', 'Pillai')}</Text>
      <ConversationList />
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

export default HomeScreen;
