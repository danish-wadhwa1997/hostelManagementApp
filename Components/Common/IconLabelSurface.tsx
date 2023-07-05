import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Card, Text, TouchableRipple, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFValue} from 'react-native-responsive-fontsize';

type IconLabelSurfaceProps = {
  icon: string;
  label: string;
  onClick?: Function;
  isSelected?: boolean;
};

const IconLabelSurface = ({
  icon,
  label,
  onClick,
  isSelected,
}: IconLabelSurfaceProps) => {
  const theme = useTheme();
  const handleClick = () => {
    if (onClick) {
      onClick(label);
    }
  };
  return (
    <Card
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.container,
        backgroundColor: isSelected
          ? theme.colors.primary
          : theme.colors.onPrimary,
      }}>
      <TouchableRipple onPress={handleClick}>
        <View style={styles.innerContainer}>
          <Icon
            size={RFValue(56)}
            name={icon}
            color={isSelected ? theme.colors.onPrimary : theme.colors.primary}
          />
          <Text
            variant="labelLarge"
            style={{
              color: isSelected ? theme.colors.onPrimary : theme.colors.primary,
            }}>
            {label}
          </Text>
        </View>
      </TouchableRipple>
    </Card>
  );
};

export default IconLabelSurface;

const styles = StyleSheet.create({
  container: {
    borderRadius: RFValue(8),
    minWidth: RFValue(120),
    marginVertical: RFValue(8),
  },
  innerContainer: {
    padding: RFValue(16),
    alignItems: 'center',
    rowGap: RFValue(8),
  },
});
