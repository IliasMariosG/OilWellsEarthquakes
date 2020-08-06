import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

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
            coordinate={{latitude: 36.9003240, longitude: -98.2182600}}>         
            <Image
              source={require('./assets/oil-well-marker.png')}
              style={styles.markerImage}
              // source of the image
              //<a href='https://pngtree.com/so/oil'>oil png from pngtree.com</a>
            />

          </Marker>
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
  markerImage: {
    width: 30,
    height: 30,
  },
});
