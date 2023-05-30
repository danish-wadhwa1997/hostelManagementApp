import {StyleSheet} from 'react-native';
import React from 'react';
import {RoomType} from './RoomsContainer';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {Card, Text} from 'react-native-paper';
type Props = {
  room: RoomType;
};

const RoomCard = ({room}: Props) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Room', {
      roomNumber: room.roomNumber,
      hostelId: room.buildingId,
    });
  };

  return (
    <Card mode="elevated" onPress={handleClick} style={{margin: RFValue(10)}}>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Title
        title={`Room number: ${room.roomNumber}`}
        subtitle={`No. of beds: ${room.numberOfBeds}`}
      />
      <Card.Content>
        <Text variant="titleLarge">{room.description}</Text>
      </Card.Content>
    </Card>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: RFValue(10),
  },
});
