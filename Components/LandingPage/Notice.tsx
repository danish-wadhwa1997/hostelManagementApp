import {StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Card, Text, Paragraph} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
import NoticeDescriptionDialog from './NoticeDescriptionDialog';
import {NoticeProps} from './LandingPage';
const Notice = ({id, notices, hostel, reg_date}: NoticeProps) => {
  const [showDialog, toggleDialog] = useState(false);
  const showDetailedNotice = () => {
    toggleDialog(true);
  };

  const hideDialog = () => {
    toggleDialog(false);
  };
  // const options = {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // };

  const date = new Date(reg_date).toLocaleDateString('en-US');

  return (
    <Card key={id} style={styles.container} onPress={showDetailedNotice}>
      <NoticeDescriptionDialog
        show={showDialog}
        onClose={hideDialog}
        heading={hostel}
        description={notices}
        date={date}
      />
      <Text
        style={{textAlign: 'center', padding: RFValue(8)}}
        variant="labelLarge">
        {hostel}
      </Text>
      <Text
        style={{textAlign: 'center', padding: RFValue(8)}}
        variant="labelLarge">
        {date}
      </Text>
      <Card.Content>
        <Paragraph numberOfLines={4} style={{textAlign: 'center'}}>
          {notices}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Notice;
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width - RFValue(48),
  },
});
