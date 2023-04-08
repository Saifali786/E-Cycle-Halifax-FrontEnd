import * as React from "react";
import { useState } from "react";
import Navbar from './Navbar';
import './Maps.css'

import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as turf from "@turf/turf";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia3IyODQyMjkiLCJhIjoiY2xmbjRkdG1uMDNwczN4bGRuamZhcGpiNiJ9.yaBdwD5KE87RN8enRQt72g"; // Set your mapbox token here

export const Maps = () => {
  const [userLocation, setUserLocation] = useState(null);

  const onGeolocate = (position) => {
    setUserLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const markers = [
    { longitude: -63.57892, latitude: 44.6434516, percentage: "15%" },
    { longitude: -63.5766997, latitude: 44.6494304, percentage: "30%"  },
    { longitude: -63.604171, latitude: 44.6594156, percentage: "65%"  },
    { longitude: -63.62237119567033, latitude: 44.6480109290126, percentage: "55%"  },
    { longitude: -63.6564924, latitude: 44.6613614, percentage: "12%"  },
    { longitude: -63.57239, latitude: 44.64533, percentage: "18%"  },
    { longitude: -63.574431, latitude: 44.637594, percentage: "2%"  },
    { longitude: -63.5837315, latitude: 44.6378638, percentage: "46%"  },
    { longitude: -63.591039, latitude: 44.637421, percentage: "86%"  },
    { longitude: -63.586743, latitude: 44.641108, percentage: "34%"  },
    { longitude: -63.60189, latitude: 44.644301, percentage: "76%"  },
    { longitude: -63.600959, latitude: 44.659217, percentage: "11%"  },
    { longitude: -63.619607, latitude: 44.64761, percentage: "45%"  },
    { longitude: -63.6209577, latitude: 44.6626439, percentage: "65%"  },
    { longitude: -63.602621, latitude: 44.662628, percentage: "23%"  },
    { longitude: -63.6249627, latitude: 44.6398452, percentage: "47%"  },
    { longitude: -63.631785, latitude: 44.659581, percentage: "72%"  },
    { longitude: -63.6165942, latitude: 44.6130235, percentage: "38%"  },
  ];

  return (
    <><Navbar /><Map
      initialViewState={{
        latitude: 44.6434516,
        longitude: -63.57892,
        zoom: 14,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {markers.map((marker) => (
        <Marker
          key={`${marker.longitude}-${marker.latitude}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          color="red"
        >
          <Popup
            offsetTop={-15}
            closeButton={false}
            closeOnClick={false}
            anchor="bottom"
            longitude={marker.longitude}
            latitude={marker.latitude}
          >
            {userLocation &&
              `${turf
                .distance(
                  turf.point([userLocation.longitude, userLocation.latitude]),
                  turf.point([marker.longitude, marker.latitude]),
                  { units: "kilometers" }
                )
                .toFixed(2)} km`}
          </Popup>
            <Popup
              closeButton={false}
              closeOnClick={false}
              longitude={marker.longitude}
              latitude={marker.latitude}
              anchor="top"
              maxWidth="150px"
              className="popup"
            >
              {marker.percentage}
            </Popup>
        </Marker>
      ))}
      <NavigationControl />
      <GeolocateControl
        trackUserLocation={true}
        showUserHeading={true}
        onGeolocate={onGeolocate} />
      <FullscreenControl />
      <ScaleControl />
    </Map></>
  );
};
