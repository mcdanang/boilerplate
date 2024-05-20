"use client";

import React from "react";
import { GoogleMap, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  //   width: "400px",
  height: "400px",
};

const pos = { lat: -6.2273378, lng: 106.8296488 };

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? "",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={pos} zoom={15}>
      {/* Child components, such as markers, info windows, etc. */}
      <InfoWindow position={pos}>
        <h1>Hi I am Info Window</h1>
      </InfoWindow>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
