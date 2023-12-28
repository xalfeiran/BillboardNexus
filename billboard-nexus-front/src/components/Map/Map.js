import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import UseMapCenter from './UseMapCenter'; // Import the custom hook
import 'leaflet/dist/leaflet.css';
import './Map.css';

const squareIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/billboard-marker.png'), // Path to your square icon image
  iconSize: [25, 25], // Size of the icon
  iconAnchor: [12, 12], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -12], // Point from which the popup should open relative to the iconAnchor
});

const Map = ({ billboards, center }) => {

  console.log('center is', center);
  
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {billboards.map((billboard, index) => (
        <Marker key={index} position={billboard.location} icon={squareIcon}>
          <Popup>
            {billboard.title} - {billboard.price}
            <br />
            {billboard.description}
          </Popup>
        </Marker>
      ))}
      <UseMapCenter center={center} />
    </MapContainer>
  );
};

export default Map;
