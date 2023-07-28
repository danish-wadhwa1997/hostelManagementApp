import {StyleSheet, View, SectionList} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Divider, List, Text, useTheme} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
const DATA = [
  {
    title: 'Monday',
    data: [
      {title: 'Breakfast', value: 'Roti Sabji'},
      {title: 'Lunch', value: 'Chawal Dal & Sabji'},
      {title: 'Snacks', value: 'Chawin & Tea'},
      {title: 'Dinner', value: 'Roti Sabji'},
    ],
  },
  {
    title: 'Tuesday',
    data: [
      {title: 'Breakfast', value: 'Idli Sambar'},
      {title: 'Lunch', value: 'Chawal Dal & Sabji'},
      {title: 'Snacks', value: 'Poha & Tea'},
      {title: 'Dinner', value: 'Roti Sabji, Kheer'},
    ],
  },
  {
    title: 'Wednesday',
    data: [
      {title: 'Breakfast', value: 'Aalu Paratha'},
      {title: 'Lunch', value: 'Chawal Dal & Sabji'},
      {title: 'Snacks', value: 'Biscuit & Tea'},
      {title: 'Dinner', value: 'Chicken, Paneer, Roti & Rice'},
    ],
  },
  {
    title: 'Thursday',
    data: [
      {title: 'Breakfast', value: 'Puri Sabji'},
      {title: 'Lunch', value: 'Kadhi, Chawal, Bhujiya'},
      {title: 'Snacks', value: 'Bread Pakoda & Tea'},
      {title: 'Dinner', value: 'Manchurian Roti'},
    ],
  },
  {
    title: 'Friday',
    data: [
      {title: 'Breakfast', value: 'Roti Sabji'},
      {title: 'Lunch', value: 'Rajma, Chawal, Salad'},
      {title: 'Snacks', value: 'Upma & Tea'},
      {title: 'Dinner', value: 'Egg Curry paneer, Roti'},
    ],
  },
  {
    title: 'Saturday',
    data: [
      {title: 'Breakfast', value: 'Sattu Paratha'},
      {title: 'Lunch', value: 'Khichdi, Papad'},
      {title: 'Snacks', value: 'Pasta & Tea'},
      {title: 'Dinner', value: 'Tadka Bhujiya, Roti'},
    ],
  },
  {
    title: 'Sunday',
    data: [
      {title: 'Breakfast', value: 'Pav Bhaji'},
      {title: 'Lunch', value: 'Jeera Rice, Dal & Sabji'},
      {title: 'Snacks', value: 'Biscuit & Tea'},
      {title: 'Dinner', value: 'Chicken, Paneer, Roti & Rice'},
    ],
  },
];

const Meals = () => {
  const theme = useTheme();
  return (
    <KeyboardAwareScrollView>
      <View style={{padding: RFValue(16)}}>
        <Text variant="headlineLarge">Meals for the week</Text>
        <Divider style={{marginBottom: RFValue(16)}} />
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                columnGap: RFValue(8),
                alignItems: 'center',
                paddingHorizontal: RFValue(16),
              }}>
              <Text variant="bodyLarge" style={{fontWeight: 'bold'}}>
                {item.title} :
              </Text>
              <Text variant="bodyLarge">{item.value}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text
              variant="titleLarge"
              style={{
                color: theme.colors.primary,
                backgroundColor: theme.colors.primaryContainer,
                marginVertical: RFValue(8),
                padding: RFValue(4),
              }}>
              {title}
            </Text>
          )}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Meals;
