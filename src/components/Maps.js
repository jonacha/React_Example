import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.262985,
      lng: 2.56
    },
    zoom: 11
  };
 
  render() {
    return (
      <Map google={this.props.google} zoom={14}
       initialCenter={{
            lat: 43.262985,
            lng:  -2.935013

          }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
         
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 export default GoogleApiWrapper({
  apiKey: ("AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo")
})(SimpleMap)
