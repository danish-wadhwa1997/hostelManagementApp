import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, useTheme} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  text: string;
};
const AboutList = ({text}: Props) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Icon
        name="circle-medium"
        size={RFValue(20)}
        color={theme.colors.primary}
      />
      <Text variant="bodyLarge">{text}</Text>
    </View>
  );
};

export default AboutList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    columnGap: RFValue(8),
  },
});
