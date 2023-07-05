import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme, Card, Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFValue} from 'react-native-responsive-fontsize';

const ServiceItem = ({icon, label}) => {
  const theme = useTheme();
  return (
    <Card
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.container,
        backgroundColor: theme.colors.primaryContainer,
      }}>
      <View style={styles.innerContainer}>
        <MaterialCommunityIcons
          size={RFValue(24)}
          name={icon}
          color={theme.colors.inverseSurface}
        />
        <Text
          variant="labelLarge"
          style={{...styles.label, color: theme.colors.inverseSurface}}>
          {label}
        </Text>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: RFValue(8),
    width: RFValue(120),
    marginVertical: RFValue(8),
  },
  innerContainer: {
    padding: RFValue(16),
    alignItems: 'center',
    rowGap: RFValue(8),
  },
  label: {
    textAlign: 'center',
  },
});
export default ServiceItem;
