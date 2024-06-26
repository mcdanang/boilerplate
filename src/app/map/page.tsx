"use client";

import React, { useCallback, useState } from "react";
import { GoogleMap, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  //   width: "400px",
  height: "400px",
};

interface Position {
  lat: number;
  lng: number;
}

const Map: React.FC = () => {
  const [pos, setPos] = useState<Position>({
    lat: -33.856,
    lng: 151.215,
  });

  const [infoWindow, setInfoWindow] = useState<{
    content: string;
    pos: Position;
  }>({
    content: "",
    pos: {
      lat: -33.856,
      lng: 151.215,
    },
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? "",
    libraries: ["places"],
  });

  const onLoad = useCallback(() => {
    // Initialize variables
    let bounds = new google.maps.LatLngBounds();
    /* TODO: Step 4A3: Add a generic sidebar */

    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPos({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });

          bounds.extend(pos);

          setInfoWindow({
            content: "Your location",
            pos: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });

          /* TODO: Step 3B2, Call the Places Nearby Search */
        },
        () => {
          // Browser supports geolocation, but user has denied permission
          handleLocationError(true);
        }
      );
    } else {
      // Browser doesn't support geolocation
      handleLocationError(false);
    }
  }, [pos]);

  // Handle a geolocation error
  function handleLocationError(browserHasGeolocation: boolean) {
    // Set default location to Sydney, Australia
    const defaultPos = { lat: -33.856, lng: 151.215 };
    setPos(defaultPos);

    // Display an InfoWindow at the map center
    setInfoWindow({
      content: browserHasGeolocation
        ? "Geolocation permissions denied. Using default location."
        : "Error: Your browser doesn't support geolocation.",
      pos: pos,
    });

    /* TODO: Step 3B3, Call the Places Nearby Search */
  }
  /* END TODO: Step 2, Geolocate your user */
  /* TODO: Step 3B1, Call the Places Nearby Search */
  // Perform a Places Nearby Search Request
  function getNearbyPlaces(position) {
    let request = {
      location: position,
      rankBy: google.maps.places.RankBy.DISTANCE,
      keyword: "sushi",
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
  }

  // Handle the results (up to 20) of the Nearby Search
  function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarkers(results);
    }
  }

  /* TODO: Step 3C, Generate markers for search results */

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={pos}
      zoom={15}
      onLoad={onLoad}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <InfoWindow position={infoWindow.pos}>
        <h1>{infoWindow.content}</h1>
      </InfoWindow>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
