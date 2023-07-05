import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapScreen = ({location, title, description}) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location}>
        <Marker coordinate={location} title={title} description={description} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
