import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Button, Text, useTheme} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import AboutList from './AboutList';
import {Linking} from 'react-native';

const lists = [
  'Comfortable and affordable living spaces for female students and working professionals',
  'Safe and secure environment with 24/7 security',
  'Modern amenities such as Wi-Fi and healthy food',
  'Friendly and inclusive community that encourages personal growth',
  'Attentive and helpful staff',
  'Access to common areas such as TV room, study room, and outdoor spaces',
  'Regular cleaning and maintenance of the premises',
  'Convenient location with easy access to public transportation, shops, and restaurants',
  'Laundry facilities available for residents',
  'Air conditioning and power backup to ensure a comfortable stay',
];
const About = () => {
  const theme = useTheme();
  const handleGetInTouch = () => {
    Linking.openURL(`tel:${7250142315}`);
  };
  return (
    <KeyboardAwareScrollView>
      <Image
        style={{width: '100%', height: RFValue(200)}}
        resizeMode="cover"
        source={require('../../assets/education.jpeg')}
      />
      <View style={styles.container}>
        <Text
          variant="headlineMedium"
          style={{
            color: theme.colors.primary,
          }}>
          Comfortable and Secure Accommodation for Women
        </Text>
        <Text variant="bodyLarge">
          7 Wonders Girls Paying Guest Hostels is a leading provider of
          comfortable and secure accommodation for female students and working
          professionals in Bihar, India. With a commitment to offering
          affordable and homely living spaces, the hostel provides modern
          amenities such as Wi-Fi, 24/7 security, healthy food, and a friendly
          environment to ensure a comfortable stay for its residents. The hostel
          aims to create a supportive and empowering community for women by
          promoting a culture of respect, inclusivity, and personal growth.
        </Text>
        <View
          style={{
            rowGap: RFValue(8),
            paddingRight: RFValue(16),
          }}>
          {lists.map((item, i) => (
            <AboutList text={item} key={i} />
          ))}
        </View>
        <Button mode="contained-tonal" onPress={handleGetInTouch}>
          Get In Touch
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RFValue(16),
    rowGap: RFValue(16),
  },
});
