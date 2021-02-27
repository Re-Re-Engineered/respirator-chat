import React from 'react';
import { Button } from 'react-native';

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

export default NavButton;
