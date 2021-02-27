import React, {useState} from 'react';
import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';

import { Generate10 } from '../mock/conversation';

import themeing from '../configging/theming';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    // height: 44,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
});

const tenConvos = Generate10();

const ConversationList = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <View style={{}}>
      <Text>Conversation list goes ccccccccccc [{clicks}] times</Text>
      <FlatList
        data={tenConvos}
        renderItem={({item}) => (
          <Pressable key={item.id} onPress={() => { setClicks(clicks + 1) }}>
            <Text style={styles.item}>{item.person}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ConversationList;
