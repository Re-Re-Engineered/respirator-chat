import React, { useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

import theming from '../configging/theming';

type SectionButtonProps = {
  // children: React.ReactNode,
  sectionName: string,
  onPress: any,
  active: boolean,
}

const SectionButton = ({ sectionName, active, onPress }: SectionButtonProps) => (
  <Pressable style={[styles.sectionButton, active? styles.activeSectionButton : null ]} onPress={onPress}>
    <Text style={[styles.buttonText, active ? styles.activeButtonText : null ]}>{sectionName}</Text>
  </Pressable>
);

const AppBar = () => {
  const [selected, setSelected] = useState(0);
  // const noop = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.appBarTitleSpace}>
        <Text style={[styles.textColoring, styles.title]}>Respirator Chat</Text>
      </View>
      <View style={styles.sectionBar}>
        {['Section A', 'Section B', 'Section C'].map((sectionName, idx) => (
          <SectionButton active={idx === selected} key={sectionName} sectionName={sectionName} onPress={() => { setSelected(idx) }} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theming.appBarColor,
    minHeight: 10,
  },
  appBarTitleSpace: {
    padding: 10,
    paddingLeft: 15
  },
  sectionBar: {
    flexDirection: 'row',
    // minHeight: 20,
    // flex: 1,
  },
  sectionButton: {
    flexBasis: '33.33%',
    borderBottomWidth: 7,
    padding: 10,
    borderBottomColor: '#efefef'
    // textAlign: 'center',
    // width: ,
    // minHeight: 20,
    // backgroundColor: 'blue'
  },
  activeSectionButton: {
    borderBottomColor: theming.activeButtonColor,
  },
  textColoring: {
    color: theming.abTextColor,
  },
  buttonText: {
    color: theming.abTextColor,
    textAlign: 'center',
  },
  activeButtonText: {
    color: theming.activeButtonColor,
  },
  title: {
    fontSize: 22,
  }
});


export default AppBar;