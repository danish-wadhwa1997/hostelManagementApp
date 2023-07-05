import {StyleSheet, View, Image} from 'react-native';
import {Text, Button, Surface, TouchableRipple} from 'react-native-paper';
import React from 'react';
import {HostelType} from './index';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {BACKEND_BASE_URL} from '@env';

type Props = {hostel: HostelType};

const HostelCard = ({hostel}: Props) => {
  const navigation = useNavigation();

  const handleViewHostelDetails = () => {
    navigation.navigate('AppStack', {
      screen: 'Hostel',
      params: {hostel: hostel},
    });
  };

  return (
    <Surface elevation={2} style={styles.surface}>
      <TouchableRipple onPress={handleViewHostelDetails}>
        <View style={styles.container}>
          <Image
            source={{
              uri: `${BACKEND_BASE_URL}${hostel.image}`,
            }}
            style={styles.image}
          />
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.title}>{hostel.hname}</Text>
              <Text style={styles.description}>{hostel.harea}</Text>
            </View>
            <View style={styles.buttonRatingContainer}>
              <Text variant="labelMedium">{hostel.hcity}</Text>
            </View>
          </View>
        </View>
      </TouchableRipple>
    </Surface>
  );
};

export default HostelCard;

const styles = StyleSheet.create({
  surface: {margin: RFValue(10), borderRadius: RFValue(8)},
  container: {
    flexDirection: 'row',
  },
  image: {
    width: '50%',
    aspectRatio: 1, // Ensures the image maintains its aspect ratio
    borderRadius: RFValue(8),
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  detailsContainer: {
    flex: 1,
    padding: RFValue(10),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginBottom: RFValue(5),
  },
  description: {
    fontSize: RFValue(12),
    // color: ,
  },
  rating: {
    fontSize: RFValue(12),
    // color: '#888',
  },
  buttonRatingContainer: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    columnGap: RFValue(10),
  },
  btnContentStyle: {
    flexDirection: 'row-reverse',
  },
});
