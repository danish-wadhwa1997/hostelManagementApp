import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {getHostelDetails} from '../Services/hostelServices';
import {BACKEND_BASE_URL} from '@env';

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
  const {hostelName} = useRoute().params;
  const [selectedTab, setTab] = useState(TABS[0].value);
  const theme = useTheme();
  const [images, setImages] = useState<Array<string>>([]);
  const [hostel, setHostel] = useState();
  const handleBookRoom = () => {
    navigation.navigate('BookRoom', {hostel: hostel?.hname});
  };

  console.log(hostel);
  const getDetails = async () => {
    try {
      const response = await getHostelDetails(hostelName);
      // console.log(response.data);
      let imageArray = [];
      let hostelDetails;
      if (response?.data) {
        imageArray = response.data[0]
          .filter(item => item.image)
          .map(item => `${BACKEND_BASE_URL}${item.image}`);
        hostelDetails = response.data[1][0];
        setImages(imageArray);
        setHostel(hostelDetails);
      }
    } catch (error) {
      console.error(error);
      setImages([]);
      setHostel({});
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const getTabContent = (value: string) => {
    switch (value) {
      case TABS_VALUES.ADDRESS:
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
  console.log(images);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
        <ImageCarousel images={images} />

        <View style={styles.detailsContainer}>
          <View style={{paddingHorizontal: RFValue(16)}}>
            <Card>
              <Card.Title
                title={hostel?.hname}
                subtitle={`Contact no. ${hostel?.hphone}`}
                left={props => <Avatar.Icon {...props} icon="home" />}
              />
              <Card.Content>
                <Paragraph numberOfLines={10}>{hostel?.hdesc}</Paragraph>
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
