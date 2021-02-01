import React, { FC, useState } from 'react';
import ReactMapGL from 'react-map-gl';

export const Map: FC = () => {
  const [viewPort, setViewPort] = useState({
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 9
    }
  });
  console.dir(process.env.NEXT_PUBLIC_MAPBOX_TOKEN);

    return (
        
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onViewportChange={(viewport) => 
            setViewPort({ viewport })
        }
        {...viewPort.viewport}
      />
    );
  
}