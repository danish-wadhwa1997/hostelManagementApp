import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import IconButtonList from '../Common/IconButtonList';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  Text,
  SegmentedButtons,
  Paragraph,
  Card,
  List,
  Title,
  useTheme,
  Button,
  Avatar,
} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImageCarousel from '../Common/ImageCarousel';
import ReviewCard from '../Common/ReviewCard';
const TABS_VALUES = {
  RULES: 'rules',
  REVIEWS: 'reviews',
  ADDRESS: 'address',
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

const TABS = [
  {value: TABS_VALUES.ADDRESS, label: 'Address'},
  {
    value: TABS_VALUES.RULES,
    label: 'Rules',
  },
  {
    value: TABS_VALUES.REVIEWS,
    label: 'Reviews',
  },
];

const REVIEWS = [
  {
    review:
      'An excellent hostel for a couple of relaxed days. Even though the hostel isn’t in the centre of Santa Marta, it has everything you need in close proximity ',
    author: 'Danish Wadhwa',
  },
  {
    review:
      'An excellent hostel for a couple of relaxed days. Even though the hostel isn’t in the centre of Santa Marta, it has everything you need in close proximity - a great supermarket, a',
    author: 'Danny',
  },
  {
    review:
      'An excellent hostel for a couple of relaxed days. Even though the hostel isn’t in the centre of Santa Marta.',
    author: 'Harshit',
  },
];
const RULES = [
  'Cancellations must be reported by email at least 48 hours on the arrival date ( arrival time will not be considered for this purpose )',
  'Please note: we may pre-authorize cards in advance',
  'Check in from 2 Pm',
  'Check out from 11 Am',
];

const Hostel = ({navigation}) => {
  const {hostel} = useRoute().params;
  const [selectedTab, setTab] = useState(TABS[0].value);
  const theme = useTheme();

  const handleBookRoom = () => {
    navigation.navigate('BookRoom', {hostel: hostel.hname});
  };

  const getTabContent = (value: string) => {
    switch (value) {
      case TABS_VALUES.ADDRESS:
        return (
          <View style={{rowGap: RFValue(10), marginBottom: RFValue(8)}}>
            <Text variant="bodyLarge">{`${hostel.harea}, ${hostel.hcity}`}</Text>
            <Image
              source={require('../../assets/map.jpg')}
              style={{
                height: RFValue(200),
                width: '100%',
                borderRadius: RFValue(8),
              }}
            />
          </View>
        );

      case TABS_VALUES.REVIEWS:
        return (
          <View style={{rowGap: RFValue(10)}}>
            <FlatList
              horizontal
              centerContent
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={REVIEWS}
              renderItem={({item}) => <ReviewCard review={item} />}
              keyExtractor={item => item.review}
            />
          </View>
        );

      case TABS_VALUES.RULES:
        return (
          <View style={{rowGap: RFValue(10), padding: RFValue(15)}}>
            {RULES &&
              RULES.map((item, index) => (
                <Text key={index} variant="bodyLarge">{`${
                  index + 1
                }. ${item}`}</Text>
              ))}
          </View>
        );

      default:
        return (
          <View style={{rowGap: RFValue(10), marginBottom: RFValue(8)}}>
            <Text variant="bodyLarge">{`${hostel?.harea}, ${hostel?.hcity}`}</Text>
            <Image
              source={require('../../assets/map.jpg')}
              style={{
                height: RFValue(200),
                width: '100%',
                borderRadius: RFValue(8),
              }}
            />
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
        <ImageCarousel
          images={[
            'https://en-media.thebetterindia.com/uploads/2017/04/stops-hostel-varanasi-86-600x400.jpg',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fim.whatshot.in%2Fimg%2F2020%2FJun%2Fimage-7-1591858907.jpg&f=1&nofb=1&ipt=b813f0a140f2870dee50d6ed45277956c7a1f826d6f4e01ce22613e5c1cd4183&ipo=images',
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Faspiringbackpacker.com%2Fwp-content%2Fuploads%2F2012%2F02%2FHostel-Australia-300x201.jpg&f=1&nofb=1&ipt=c4d059aa63d9ab30f5740f0ff6009678d669c2ac7ba4eb4d979b4cfd16155345&ipo=images',
          ]}
        />

        <View style={styles.detailsContainer}>
          <View style={{paddingHorizontal: RFValue(16)}}>
            <Card>
              <Card.Title
                title={hostel.hname}
                subtitle={`Contact no. ${hostel.hphone}`}
                left={props => <Avatar.Icon {...props} icon="home" />}
              />
              <Card.Content>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Paragraph>
              </Card.Content>
            </Card>

            <View
              style={{
                ...styles.infoContainer,
                backgroundColor: theme.colors.surfaceVariant,
              }}>
              <Title>Additional Information</Title>
              <List.Item
                title="Single/Double/Triple"
                left={props => <List.Icon {...props} icon="bed" />}
              />
              <List.Item
                title="&#8377; 8000"
                left={props => <List.Icon {...props} icon="cash" />}
              />

              <List.Item
                title="AC/Non Ac"
                left={props => <List.Icon {...props} icon="snowflake" />}
              />
            </View>
            <View style={{rowGap: RFValue(10)}}>
              <SegmentedButtons
                value={selectedTab}
                onValueChange={setTab}
                buttons={TABS}
                density="medium"
                style={{padding: RFValue(10)}}
              />
              {getTabContent(selectedTab)}
            </View>

            {/* meal type list */}
            <View style={styles.mealListContainer}>
              <IconButtonList
                list={MEAL_TYPES}
                selectedItem={MEAL_TYPES[0]}
                onChange={() => {}}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Button
        style={{
          position: 'absolute',
          bottom: RFValue(10),
          right: RFValue(10),
          left: RFValue(10),
        }}
        onPress={handleBookRoom}
        mode="contained">
        Book Now
      </Button>
    </View>
  );
};

export default Hostel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: RFValue(16),
  },
  scrollView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingBottom: RFValue(30),
  },
  heading: {textAlign: 'center', borderBottomWidth: 1},
  detailsContainer: {
    rowGap: RFValue(20),
  },
  switchContainer: {
    marginTop: RFValue(16),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: RFValue(16),
    alignItems: 'center',
  },
  mealListContainer: {
    marginBottom: RFValue(16),
  },
  infoContainer: {
    marginTop: RFValue(16),
    padding: RFValue(16),
    borderRadius: RFValue(4),
    marginBottom: RFValue(16),
  },
});
