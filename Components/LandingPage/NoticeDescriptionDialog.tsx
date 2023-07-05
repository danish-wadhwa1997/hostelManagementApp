import {ScrollView} from 'react-native';

import React from 'react';
import {Portal, Dialog, Paragraph, Text} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  show: boolean;
  onClose: () => void;
  heading: string;
  description: string;
  date: string;
};

const NoticeDescriptionDialog = ({
  show,
  onClose,
  heading,
  description,
  date,
}: Props) => {
  return (
    <Portal>
      <Dialog visible={show} onDismiss={onClose}>
        <Dialog.Title style={{textAlign: 'center'}}>{heading}</Dialog.Title>
        <Dialog.Content>
          <Text variant="labelLarge" style={{textAlign: 'center'}}>
            {date}
          </Text>
          <ScrollView contentContainerStyle={{paddingHorizontal: RFValue(16)}}>
            <Paragraph style={{textAlign: 'center'}}>{description}</Paragraph>
          </ScrollView>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default NoticeDescriptionDialog;
