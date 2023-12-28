import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

const UseMapCenter = (position) => {
  const map = useMap();

  // Effect to re-center the map when the 'center' changes
  useEffect(() => {
    console.log('center changed');
    console.log(position.center);
    if (position.center) {
     map.flyTo(position.center, 15);
    }
  }, [position, map]);

  return null;
};

export default UseMapCenter;