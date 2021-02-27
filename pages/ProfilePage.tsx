import React from 'react';
import { Text } from 'react-native';

import Column from '../components/reusable/Column';
import NavButton from '../components/reusable/NavButton';

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

export default ProfileScreen;
