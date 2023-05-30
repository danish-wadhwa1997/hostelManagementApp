import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getAllRooms} from '../Services/roomServices';
import RoomCard from './RoomCard';
import {FAB, Text} from 'react-native-paper';

export type RoomType = {
  booked: boolean;
  buildingId: string;
  'date-created': string;
  'date-modified': string;
  description: string;
  numberOfBeds: number;
  roomNumber: number;
  roomType: string;
};

const RoomsContainer = () => {
  const {hostelId} = useRoute().params;
  const [rooms, setRooms] = useState();

  const getRoomsByHostelId = async () => {
    try {
      const response = await getAllRooms(hostelId);

      if (response?.data?.rooms) {
        setRooms(response.data.rooms);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoomsByHostelId();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rooms}
        renderItem={({item}) => <RoomCard room={item} />}
        keyExtractor={item => item.roomNumber}
        ListEmptyComponent={
          <Text variant="headlineLarge">No Rooms available</Text>
        }
      />
      <FAB
        icon="filter"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
    </SafeAreaView>
  );
};

export default RoomsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(20),
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
