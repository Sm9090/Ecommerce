import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const MapComponent = () => {

    const position = [24.83395636684734, 67.03383357846882]; 
 
    const customIcon = new L.Icon({
      iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
 
    return (
      <MapContainer center={position} zoom={15} style={{height: '200px', width: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy;  contributors'
        />
          <Marker position={position} icon={customIcon}>
            <Popup>Teen Talwar</Popup>
          </Marker>
      </MapContainer>
    );
  };

  export default  MapComponent