import React, { useRef } from "react";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// export default function Map = () => {
export default function Map({ contact }) {
  const GoogleMapExample = withGoogleMap((props) => (
    <>
      {" "}
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >
        {<Marker position={{ lat: 40.756795, lng: -73.954298 }} />}
      </GoogleMap>
    </>
  ));
  <GoogleMapExample isMarkerShown={true} />;
  return (
    <>
      <div>
        <GoogleMapExample
          containerElement={
            <div
              style={{
                height: `200px`,
                width: "100%",
                borderTopLeftRadius: "50",
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
}
