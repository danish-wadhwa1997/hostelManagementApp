import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RoomType} from './RoomsContainer';
import {getRoomByHostelAndRoomNumber} from '../Services/roomServices';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Text} from 'react-native-paper';
import ImageCarousel from '../Common/ImageCarousel';
const Room = () => {
  const {hostelId, roomNumber} = useRoute().params;
  const navigation = useNavigation();
  const [room, setRoom] = useState<RoomType | null>(null);

  const getRoomDetails = async () => {
    try {
      const response = await getRoomByHostelAndRoomNumber(roomNumber, hostelId);
      if (response?.data?.room) {
        // navigation.setOptions({title: response.data.room.roomNumber});
        setRoom(response.data.room);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
        <ImageCarousel
          images={[
            'https://picsum.photos/700',
            'https://picsum.photos/600',
            'https://picsum.photos/800',
          ]}
        />
        <View style={styles.detailsContainer}>
          <View style={{rowGap: RFValue(20)}}>
            <View>
              <Text variant="titleLarge">Description</Text>
              <Text variant="bodyLarge">{room?.description}</Text>
            </View>
            <View>
              <Text variant="titleLarge">Room Type</Text>
              <Text variant="bodyLarge">{room?.roomType}</Text>
            </View>
            <View>
              <Text variant="titleLarge">Beds</Text>
              <Text variant="bodyLarge">{room?.numberOfBeds}</Text>
            </View>
          </View>
          <View>
            <Button mode="contained" onPress={() => console.log('called')}>
              Book Now
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flex: 1,
  },
  detailsContainer: {
    rowGap: RFValue(20),
    padding: RFValue(10),
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});
