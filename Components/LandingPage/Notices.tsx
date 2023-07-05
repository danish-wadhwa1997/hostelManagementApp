import {StyleSheet, FlatList} from 'react-native';
import {Card, Text} from 'react-native-paper';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Notice from './Notice';
import {NoticeProps} from './LandingPage';

type Props = {
  notices: Array<NoticeProps>;
};
const Notices = ({notices}: Props) => {
  if (notices && notices.length > 0) {
    return (
      <FlatList
        data={notices}
        contentContainerStyle={{
          columnGap: RFValue(16),
          paddingVertical: RFValue(8),
          paddingHorizontal: RFValue(8),
        }}
        horizontal
        renderItem={({item}) => <Notice {...item} />}
        keyExtractor={item => item.heading}
      />
    );
  }
  return (
    <Card style={{padding: RFValue(16)}}>
      <Text variant="labelLarge">No New Notices to show</Text>
    </Card>
  );
};

export default Notices;

const styles = StyleSheet.create({});
