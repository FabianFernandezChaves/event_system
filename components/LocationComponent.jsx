'use client';
import { useState, useEffect } from "react";
import { getLongAddressFromCoordinatesOSM } from "@/utils/geolocation";
import { FaLocationDot } from "react-icons/fa6";

/**
 * LocationComponent
 * 
 * This component displays the Google Maps embed and retrieves the address
 * based on latitude and longitude.
 * 
 * @param {Object} props - The component properties.
 * @param {number} props.latitude - The latitude of the event location.
 * @param {number} props.longitude - The longitude of the event location.
 * @returns {JSX.Element} The map and address for the location.
 */
export default function LocationComponent({ latitude, longitude }) {
  const [longAddress, setLongAddress] = useState('');

  // Fetch the address when the component mounts and when the coordinates change
  useEffect(() => {
    if (latitude && longitude) {
      getLongAddressFromCoordinatesOSM(latitude, longitude)
        .then(setLongAddress)
        .catch((error) => console.error("Error fetching address:", error));
    }
  }, [latitude, longitude]);

  // Generate the Google Maps embed URL with the marker
  const mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="location-component">
      {/* Google Maps iframe */}
      <iframe
        src={mapSrc}
        width="100%"
        height="300"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Event Location"
      ></iframe>
      
      {/* Display the address below the map */}
       <p className="mt-2 text-md text-gray-600 flex">
        <FaLocationDot className="text-2xl text-rose-500 drop-shadow-md mr-1" />
        {longAddress || "Loading address..."}
        </p>
    </div>
  );
}
