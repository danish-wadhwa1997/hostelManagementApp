import React from 'react';
import {RoomType} from './RoomsContainer';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {Card, Paragraph, useTheme, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet} from 'react-native';
type Props = {
  room: RoomType;
};

const RoomCard = ({room}: Props) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const handleClick = () => {
    navigation.navigate('Room', {
      roomNumber: room.roomNumber,
      hostelId: room.buildingId,
    });
  };

  return (
    <Card mode="elevated" onPress={handleClick} style={{margin: RFValue(10)}}>
      <Card.Cover
        source={{
          uri: 'https://www.travelinglifestyle.net/wp-content/uploads/2018/11/Sungate-ONE-best-hostel-room.jpg',
        }}
      />
      {/* <Card.Title title={room.roomNumber} /> */}
      <Card.Content>
        <View style={styles.cardDescription}>
          <View style={styles.iconLabel}>
            <Icon
              name={'snowflake'}
              size={RFValue(20)}
              color={theme.colors.outline}
            />
            <Text variant="labelLarge">AC</Text>
          </View>
          <View style={styles.iconLabel}>
            <Icon
              name={'bed'}
              size={RFValue(20)}
              color={theme.colors.outline}
            />
            <Text variant="labelLarge">Single/Double</Text>
          </View>
          <View style={styles.iconLabel}>
            <Icon
              name={'cash'}
              size={RFValue(20)}
              color={theme.colors.outline}
            />
            <Text variant="labelLarge">$XX</Text>
          </View>
        </View>
        <Paragraph>{room.description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  cardDescription: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconLabel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    columnGap: RFValue(8),
    alignItems: 'center',
    padding: RFValue(8),
  },
});
