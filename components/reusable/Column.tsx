import React from 'react';
import { View } from 'react-native';

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

export default Column;
