import {StyleSheet, ScrollView} from 'react-native';

import React from 'react';
import {Portal, Dialog, Text, Button} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  show: boolean;
  onClose: () => void;
};

const MealInfoDialog = ({show, onClose}: Props) => {
  return (
    <Portal>
      <Dialog visible={show} onDismiss={onClose}>
        <Dialog.Title>Meal Info</Dialog.Title>
        <Dialog.Content>
          <ScrollView contentContainerStyle={{paddingHorizontal: RFValue(16)}}>
            <Text>This is a scrollable area</Text>
          </ScrollView>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onClose}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default MealInfoDialog;
