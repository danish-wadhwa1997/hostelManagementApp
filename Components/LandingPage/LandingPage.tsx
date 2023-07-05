import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImageCarouselV2 from '../Common/ImageCarouselV2';
import {
  Card,
  Text,
  Button,
  useTheme,
  Paragraph,
  List,
} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
import ServiceItem from './ServiceItem';
import Notices from './Notices';
import {getNotices} from '../Services/hostelServices';

const services = [
  {icon: 'wifi', label: 'High Speed Internet'},
  {icon: 'google-maps', label: 'Convenient Locations'},
  {icon: 'cupboard', label: 'Ample Storage'},
  // {icon: 'parking', label: 'Parking Space'},
  {icon: 'washing-machine', label: 'Laundry'},
  {icon: 'food', label: 'Meals'},
];

export interface NoticeProps {
  id: string;
  notices: string;
  hostel: string;
  reg_date: string;
}
const LandingPage = ({navigation}) => {
  const theme = useTheme();
  const handleStartLooking = () => {
    navigation.navigate('Hostels');
  };

  const [notices, setNotices] = useState<Array<NoticeProps>>([]);

  const getAllNotices = async () => {
    try {
      const {data} = await getNotices();
      console.log(data);
      if (data && data.length > 0) {
        setNotices(data);
      } else {
        setNotices([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllNotices();
  }, []);
  console.log(notices);
  return (
    // <ImageBackground
    //   style={{flex: 1}}
    //   // resizeMode="stretch"
    //   source={require('../../assets/background/blob2.png')}>
    <KeyboardAwareScrollView style={{backgroundColor: theme.colors.surface}}>
      <Card
        style={{
          ...styles.card,
          backgroundColor: theme.colors.primaryContainer,
        }}>
        <View style={styles.cardImageContainer}>
          <Image
            source={require('../../assets/landing.png')}
            style={styles.cardImage}
          />
        </View>
        {/* <ImageCarouselV2 /> */}
        <Card.Content style={{marginTop: RFValue(16)}}>
          <Text
            variant="labelLarge"
            style={{textAlign: 'center', marginBottom: RFValue(8)}}>
            7 Wonders Girls Paying Guest
          </Text>
          <Paragraph style={{textAlign: 'center'}}>
            This Hostels is a leading provider of comfortable and secure
            accommodation for female students and working professionals in
            Bihar, India.
          </Paragraph>
        </Card.Content>
        <View style={{marginHorizontal: RFValue(64), marginTop: RFValue(16)}}>
          <Button
            mode="contained"
            icon={'magnify'}
            compact
            onPress={handleStartLooking}>
            Start Looking
          </Button>
        </View>
      </Card>
      {/* image carousel */}
      <View style={{marginTop: RFValue(16)}}>
        <ImageCarouselV2 />
      </View>
      {/* notice board */}
      <View
        style={{
          marginTop: RFValue(16),
          backgroundColor: theme.colors.onPrimary,
          padding: RFValue(16),
        }}>
        <Text
          variant="headlineSmall"
          style={{
            color: theme.colors.primary,
            marginBottom: RFValue(8),
            fontWeight: 'bold',
          }}>
          Notice Board
        </Text>
        {notices && notices.length > 0 ? (
          <Notices notices={notices} />
        ) : (
          <Text>Loading</Text>
        )}
      </View>

      {/* services section */}
      <View
        style={{
          marginTop: RFValue(16),
          backgroundColor: theme.colors.onPrimary,
          padding: RFValue(16),
        }}>
        <Text
          variant="headlineSmall"
          style={{
            color: theme.colors.primary,
            marginBottom: RFValue(8),
            fontWeight: 'bold',
          }}>
          Our Services
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          {services.length > 0 &&
            services.map(item => <ServiceItem key={item.label} {...item} />)}
        </View>
      </View>
      <View
        style={{
          padding: RFValue(16),
          backgroundColor: theme.colors.surface,
        }}>
        <Text
          variant="headlineSmall"
          style={{
            color: theme.colors.inverseSurface,
            marginBottom: RFValue(8),
            fontWeight: 'bold',
          }}>
          Why Choose 7 Wonders Girls Paying Guest Hostels!
        </Text>
        <Paragraph>
          7 Wonders Girls Paying Guest Hostels is a popular choice for female
          students and working professionals seeking a comfortable and secure
          living environment in Bihar, India, for the following reasons:
        </Paragraph>
        <List.Item
          title="Affordable and comfortable"
          left={props => <List.Icon {...props} icon="circle-medium" />}
        />
        <List.Item
          title="Safe and secure environment"
          left={props => <List.Icon {...props} icon="circle-medium" />}
        />
        <List.Item
          title="Supportive and inclusive community"
          left={props => <List.Icon {...props} icon="circle-medium" />}
        />
        <List.Item
          title="Attentive and helpful staff"
          left={props => <List.Icon {...props} icon="circle-medium" />}
        />
        <List.Item
          title="Convenient location"
          left={props => <List.Icon {...props} icon="circle-medium" />}
        />
        <List.Item
          title="Regular cleaning and maintenance"
          left={props => <List.Icon {...props} icon="circle-medium" />}
        />
        <List.Item
          title="Air conditioning and power backup"
          left={props => <List.Icon {...props} icon="circle-medium" />}
        />
      </View>
      {/* why choose us */}
    </KeyboardAwareScrollView>
    // </ImageBackground>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  card: {
    margin: RFValue(16),
    padding: RFValue(8),
    alignItems: 'center',
  },
  cardImageContainer: {justifyContent: 'center', alignItems: 'center'},
  cardImage: {
    width: RFValue(100),
    height: RFValue(100),
    resizeMode: 'contain',
  },
  servicesContainer: {
    columnGap: RFValue(8),
    // paddingHorizontal: RFValue(16),
  },
});
