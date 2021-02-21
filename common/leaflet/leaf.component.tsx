import React, {FC} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { LatLngTuple } from 'leaflet';


const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const position = [51.505, -0.09]
const zoom:number = 8;

export const Map: FC = () => {
    return(
        <MapContainer center={defaultLatLng} zoom={13} scrollWheelZoom={false} style={{height: 500, width: 500}}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={defaultLatLng}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    )
}