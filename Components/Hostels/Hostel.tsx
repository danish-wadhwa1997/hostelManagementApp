import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {getHostelDetails} from '../Services/hostelServices';
import {HostelType} from './index';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text, SegmentedButtons} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImageCarousel from '../Common/ImageCarousel';
import ReviewCard from '../Common/ReviewCard';

const TABS_VALUES = {
  RULES: 'rules',
  REVIEWS: 'reviews',
  ADDRESS: 'address',
};
const staticLocation = {
  latitude: 40.7128,
  longitude: -74.006,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

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
const Hostel = ({navigation}) => {
  const {hostelId} = useRoute().params;
  const [building, setBuilding] = useState<HostelType | null>(null);
  const [selectedTab, setTab] = useState(TABS[0].value);
  const getHostelById = async () => {
    try {
      const response = await getHostelDetails(hostelId);
      if (response?.data?.building) {
        // setting title
        navigation.setOptions({title: response.data.building.name});
        setBuilding(response.data.building);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHostelById();
  }, []);

  const getTabContent = (value: string) => {
    switch (value) {
      case TABS_VALUES.ADDRESS:
        return (
          <View style={{rowGap: RFValue(10), padding: RFValue(10)}}>
            <Text variant="bodyLarge">{building?.address}</Text>
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
              data={building?.reviews}
              renderItem={({item}) => <ReviewCard review={item} />}
              keyExtractor={item => item}
            />
          </View>
        );

      case TABS_VALUES.RULES:
        return (
          <View style={{rowGap: RFValue(10), padding: RFValue(15)}}>
            {building?.rules &&
              building?.rules.map((item, index) => (
                <Text key={index} variant="bodyLarge">{`${
                  index + 1
                }. ${item}`}</Text>
              ))}
          </View>
        );

      default:
        return (
          <View style={{rowGap: RFValue(10), padding: RFValue(10)}}>
            <Text variant="bodyLarge">{building?.address}</Text>
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
            'https://picsum.photos/700',
            'https://picsum.photos/600',
            'https://picsum.photos/800',
          ]}
        />
        <View style={styles.detailsContainer}>
          <View style={{padding: RFValue(10)}}>
            <Text variant="titleLarge">Description</Text>
            <Text variant="bodyLarge">{building?.description}</Text>
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
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Hostel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  heading: {textAlign: 'center', borderBottomWidth: 1},
  detailsContainer: {
    rowGap: RFValue(20),
  },
});
