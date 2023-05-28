import {StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';
import {Surface, Text} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

const ReviewCard = ({review}) => {
  return (
    <View style={styles.container}>
      <Surface elevation={2} style={styles.surface}>
        <Text variant="headlineLarge" style={styles.reviewText}>
          "{review}"
        </Text>
        <Text
          variant="labelLarge"
          style={{...styles.reviewText, ...styles.authorText}}>
          - Danish Wadhwa
        </Text>
      </Surface>
    </View>
  );
};

export default ReviewCard;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {padding: RFValue(15), width, paddingVertical: RFValue(10)},
  surface: {
    padding: RFValue(20),
    borderRadius: RFValue(8),
    height: RFValue(200),
    justifyContent: 'space-between',
  },
  reviewText: {
    fontStyle: 'italic',
  },
  authorText: {
    textAlign: 'right',
  },
});
