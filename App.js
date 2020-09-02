import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import injectionWells from './oilWells/injwells.json';

// console.log("hi1)")
// injectionWells.map((oilwell) => (
//   console.log(oilwell.coordinate.latitude, oilwell.coordinate.latitude)));
// console.log("hi")

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      injectionWells: [
        {
          "index": 1,
          "API_number": 3500300026,
          "coordinate": {
            "latitude": 36.900324,
            "longitude": -98.21826
          }
        },
        {
          "index": 2,
          "API_number": 5800800052,
          "coordinate": {
            "latitude": 36.800301,
            "longitude": -98.19256
          }
        }
      ]
    }
  };
    render() {
    return (
      <View style={styles.container}>
        <MapView
          // initialRegion={{cd
          //   coordinate: {
          //     latitude: 36.9003240,
          //     longitude: -98.2182600
          //   },
          //   latitudeDelta: 0.01,
          //   longitudeDelta: 5,
          // }}
        
          style={styles.mapStyle} 
          >
          
         {this.state.injectionWells.map( (oilwell,index) => <Marker
           key={index}
           coordinate={{latitude: oilwell.coordinate.latitude, longitude: oilwell.coordinate.longitude}}
          />)}
              
        </MapView>
      </View>
    );
  }
}

//{/* <Image source = {require('./assets/oil-well-marker.png')}></Image>
              //<Text style={styles.markerImage}>*/
          /* console.log(this.state.injectionWells) */

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
