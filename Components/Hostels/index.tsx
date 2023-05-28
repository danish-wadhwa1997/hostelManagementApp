import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import {getAllHostels} from '../Services/hostelServices';
import {RFValue} from 'react-native-responsive-fontsize';
import HostelCard from './HostelCard';
import {IconButton, TextInput} from 'react-native-paper';

export type HostelType = {
  address: string;
  adminId: string;
  'date-created': string;
  'date-modified': string;
  description: string;
  id: string;
  rating: string;
  reviews: Array<string>;
  rules: Array<string>;
  name: string;
};
let allHostels: Array<HostelType>;

const HostelsContainer = () => {
  const [hostels, setHostels] = useState<Array<HostelType>>();
  const [searchQuery, setSearchQuery] = useState<string>();

  const filterHostelsBySearch = (value: string) => {
    if (value) {
      return allHostels.filter((hostel: HostelType) =>
        hostel.name.toLowerCase().includes(value?.toLowerCase()),
      );
    } else {
      return allHostels;
    }
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setHostels(filterHostelsBySearch(value));
  };

  const getAllBuildings = async () => {
    try {
      const response = await getAllHostels();
      if (response?.data?.buildings) {
        allHostels = response.data.buildings;
        setHostels(response.data.buildings);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllBuildings();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filtersContainer}>
        <TextInput
          value={searchQuery}
          onChangeText={handleSearch}
          mode="outlined"
          placeholder="search"
          dense
          style={styles.searchStyle}
        />
        <IconButton
          icon="tune"
          style={styles.filterIcon}
          size={RFValue(25)}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <FlatList
        data={hostels}
        renderItem={({item}) => <HostelCard hostel={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HostelsContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(10),
    paddingBottom: RFValue(20),
    paddingTop: RFValue(5),
  },
  filtersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: RFValue(5),
    paddingBottom: RFValue(5),
  },
  searchStyle: {
    flexGrow: 1,
  },
  filterIcon: {
    borderRadius: RFValue(5),
    flexBasis: '10%',
  },
});
