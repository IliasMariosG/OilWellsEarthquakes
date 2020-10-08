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
      injectionWells: [ ],
      region: {
        latitude: 36.9003240,
        longitude: -98.2182600,
        latitudeDelta: 30,
        longitudeDelta: 40,
      },
    }
  };
  
  componentDidMount()
    {this.setState({ injectionWells: injectionWells })
    }

    render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.region}
          style={styles.mapStyle} 
        >
          
         {this.state.injectionWells.map( (oilwell,index) => <Marker
           key={index}
           coordinate={{latitude: oilwell.LAT, longitude: oilwell.LONG}}
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
