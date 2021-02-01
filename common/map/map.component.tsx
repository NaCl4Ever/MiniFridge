import React, { FC, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Image from 'next/image'
interface MapProps {
  data: Array<{
    name: string;
    longitude: number;
    latitude: number;
  }>
}

export const Map: FC<MapProps> = ({data}) => {
  const [viewPort, setViewPort] = useState({
    viewport: {
      width: '100vw',
      height: '100vh',
      longitude: -122.45,
          latitude: 37.78,
      zoom: 5
    }
  });

  const markers = React.useMemo(() => data.map(
    city => (
      <Marker key={city.name} longitude={city.longitude} latitude={city.latitude} >
        <Image src="/marker.png" width={32} height={32}></Image>
      </Marker>
    )
  ), [data]);
    return (
        
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onViewportChange={(viewport) => 
            setViewPort({ viewport })
        }
        {...viewPort.viewport}
        
      >
       {markers}
        </ReactMapGL>
    );
  
}