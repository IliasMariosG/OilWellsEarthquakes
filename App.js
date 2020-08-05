import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView 
          initialRegion={{
            latitude: 36.9003240,
            longitude: -98.2182600,
            latitudeDelta: 0.01,
            longitudeDelta: 5,
          }}
        
          style={styles.mapStyle} >
        <Marker
          coordinate={{latitude: 36.9003240, longitude: -98.2182600}}
          image={require('./assets/oil-well-marker.png')}
        />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
