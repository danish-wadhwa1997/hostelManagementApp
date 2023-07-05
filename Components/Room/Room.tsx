import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RoomType} from './RoomsContainer';
import {getRoomByHostelAndRoomNumber} from '../Services/roomServices';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Button,
  Text,
  useTheme,
  List,
  Switch,
  ToggleButton,
  RadioButton,
} from 'react-native-paper';
import ImageCarousel from '../Common/ImageCarousel';
import IconButtonList from '../Common/IconButtonList';
import {PAYMENT_CYCLE} from './contants';

type MealType = {
  icon: string;
  label: string;
};
const MEAL_TYPES = [
  {
    icon: 'food-off',
    label: 'No Meal',
  },
  {
    icon: 'food',
    label: 'once a day',
  },
  {
    icon: 'food',
    label: 'twice a day',
  },
  {
    icon: 'food',
    label: 'thrice a day',
  },
];
const Room = () => {
  const {hostelId, roomNumber} = useRoute().params;
  const [room, setRoom] = useState<RoomType | null>(null);
  const [selectedMealType, setSelectedMealType] = useState<MealType | null>(
    null,
  );
  const [forSingleBed, setForSingleBed] = useState(true);
  const [paymentRecurrence, setPaymentRecurrence] = useState(
    PAYMENT_CYCLE.MONTHLY.value,
  );
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

  const handleMealChange = (value: string) => {
    const selectedItem = MEAL_TYPES.find(item => item.label === value);
    if (selectedItem) {
      setSelectedMealType(selectedItem);
    } else {
      setSelectedMealType(null);
    }
  };

  const theme = useTheme();

  const handlesRoomSwitchValue = (value: boolean) => {
    setForSingleBed(value);
  };

  const handlePaymentCycleChange = (value: string) => {
    setPaymentRecurrence(value);
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <ImageCarousel
          images={[
            'https://i.ytimg.com/vi/E_v_5EcZINM/hqdefault.jpg',
            'https://picsum.photos/https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvidyaavikascbse.ac.in%2Fwp-content%2Fuploads%2F2019%2F02%2Fhostel-facility.jpg&f=1&nofb=1&ipt=e4bc595bdc6df4d107afd9dc20facc48d5546ee3f4e237c4b4ba1c77e6af8f9d&ipo=images',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.hwstatic.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Ct_30%2Fv1%2Fpropertyimages%2F2%2F282986%2Fjrsnbaoke4edapdfwqcb&f=1&nofb=1&ipt=a440b01370955716dac1e79c541afb8d6b19632b78cb8376acc08b88ee9558b1&ipo=images',
          ]}
        />
        <View style={{paddingHorizontal: RFValue(16)}}>
          <Card>
            <Card.Title
              title="Hostel Room"
              subtitle="Private Room with Shared Bathroom"
              left={props => <Avatar.Icon {...props} icon="home" />}
            />
            <Card.Content>
              <Title>Room Details</Title>
              <Paragraph>
                This private room is part of a hostel and has a shared bathroom.
                It is suitable for one or two occupants and includes basic
                amenities such as a bed, desk, and chair.
              </Paragraph>
            </Card.Content>
          </Card>
          <View style={styles.switchContainer}>
            <Switch
              value={forSingleBed}
              onValueChange={handlesRoomSwitchValue}
            />
            <Text variant="titleLarge">
              {forSingleBed ? 'Single Bed' : 'Whole Room'}
            </Text>
          </View>

          <View
            style={{
              ...styles.infoContainer,
              backgroundColor: theme.colors.surfaceVariant,
            }}>
            <Title>Additional Information</Title>
            <List.Item
              title="Single/Double"
              left={props => <List.Icon {...props} icon="bed" />}
            />
            <List.Item
              title="$XX"
              left={props => <List.Icon {...props} icon="cash" />}
            />

            <List.Item
              title="AC"
              left={props => <List.Icon {...props} icon="snowflake" />}
            />
          </View>
          {/* meal type list */}
          <View style={styles.mealListContainer}>
            <IconButtonList
              list={MEAL_TYPES}
              selectedItem={selectedMealType}
              onChange={handleMealChange}
            />
          </View>
          <View style={{marginVertical: RFValue(16), rowGap: RFValue(16)}}>
            <Title>Payment Cycle - months</Title>
            <RadioButton.Group
              onValueChange={handlePaymentCycleChange}
              value={paymentRecurrence}>
              <RadioButton.Item
                style={styles.radioItem}
                label={PAYMENT_CYCLE.MONTHLY.label}
                value={PAYMENT_CYCLE.MONTHLY.value}
              />
              <RadioButton.Item
                style={styles.radioItem}
                label={PAYMENT_CYCLE.QUARTERLY.label}
                value={PAYMENT_CYCLE.QUARTERLY.value}
              />
              <RadioButton.Item
                style={styles.radioItem}
                label={PAYMENT_CYCLE.HALF_YEARLY.label}
                value={PAYMENT_CYCLE.HALF_YEARLY.value}
              />
              <RadioButton.Item
                style={styles.radioItem}
                label={PAYMENT_CYCLE.YEARLY.label}
                value={PAYMENT_CYCLE.YEARLY.value}
              />
            </RadioButton.Group>
          </View>
          <Button mode="contained">Book Now - $XX</Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    marginBottom: RFValue(8),
  },
  infoContainer: {
    marginTop: RFValue(16),
    padding: RFValue(16),
    borderRadius: RFValue(4),
    marginBottom: RFValue(16),
  },
  mealListContainer: {
    marginBottom: RFValue(16),
  },
  switchContainer: {
    marginTop: RFValue(16),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: RFValue(16),
    alignItems: 'center',
  },
  radioItem: {flexDirection: 'row'},
});
