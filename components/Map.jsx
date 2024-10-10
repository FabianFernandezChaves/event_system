import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import axios from 'axios';
import { useMap } from 'react-leaflet'

// Dynamically load react-leaflet components without SSR
const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

/**
 * Map component that displays a Leaflet map with markers for events and allows for geolocation search.
 * @param {Array} events - Array of event objects containing latitudes, longitudes, names, and descriptions.
 * @returns {JSX.Element} React component rendering the map and markers.
 */
const Map = ({ events }) => {
  const [userPosition, setUserPosition] = useState([9.7489, -83.7534]);  // Initial position in Costa Rica
  const [searchQuery, setSearchQuery] = useState('');  // Stores the user's search input
  const [searchResult, setSearchResult] = useState(null);  // Stores the search result coordinates
  const [L, setLeaflet] = useState(null);  // Leaflet module loaded on the client-side
 console.log(events)
  /**
   * Effect hook to load Leaflet module and initialize map icons.
   * It also fetches the user's geolocation when the component mounts.
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      const leafletModule = require("leaflet");
      setLeaflet(leafletModule);  // Load Leaflet into state

      // Fix for loading Leaflet's default icons in Next.js
      delete leafletModule.Icon.Default.prototype._getIconUrl;
      leafletModule.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      });

      // Fetch user geolocation if supported
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition([position.coords.latitude, position.coords.longitude]);  // Update position
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
        }
      );
    }
  }, []);

  /**
   * Function to search for a location using Nominatim API.
   * It fetches the coordinates based on the user's input and updates the searchResult state.
   */
  const searchLocation = async () => {
    if (!searchQuery) return;

    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=1`);
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setSearchResult([parseFloat(lat), parseFloat(lon)]);  // Store search result coordinates
      } else {
        alert('No results found for the search.');
      }
    } catch (error) {
      console.error('Error searching location:', error);
    }
  };

  /**
   * SearchCenterMap component: Uses `useMap` to access the map instance and center it on the search result.
   */
  const SearchCenterMap = () => {
    const map = useMap();
    if (searchResult) {
      map.setView(searchResult, 12);  // Center the map on the search result coordinates
    }
    return null;
  };

  /**
   * Creates a custom marker icon with an event image overlay.
   * @param {string} imageUrl - The URL of the event image.
   * @returns {Object} A Leaflet divIcon with the custom HTML and style for the marker.
   */
  const createCustomIcon = (imageUrl) => {
    if (!L) return null;  // Ensure Leaflet is loaded

    return L.divIcon({
      html: `
        <div class="relative w-10 h-15 flex justify-center items-center transition-transform transform hover:scale-125">
          <span class="material-icons text-rose-800 text-5xl">location_on</span>
          <div class="absolute top-2 w-6 h-6 rounded-full bg-cover bg-center border-2 border-white shadow-md" style="background-image: url(${imageUrl});"></div>
        </div>
      `,
      className: "custom-marker",
      iconSize: [60, 80],  // Total size of the marker including pointer
      iconAnchor: [20, 60],  // Anchor point where the marker attaches to the map
      popupAnchor: [0, -60],  // Popup position relative to the marker
    });
  };

  return (
    <div className="p-5 " >
      
      {/* Map container */}
      <MapContainer
        center={userPosition}  // Initial position
        zoom={11}
        style={{ height: "500px", width: "100%",  }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Center the map based on the search result */}
        <SearchCenterMap />

        {/* Render event markers */}
        {events.map((event, index) => (
          <Marker key={index} position={[event.location.latitude, event.location.longitude]} icon={createCustomIcon(event.img)}>
            <Popup>
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* Search bar container, positioned on top of the map */}
      <div className="bg-white p-2 shadow-md rounded-lg">
        <input
          type="text"
          placeholder="Search location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2"
        />
        <button onClick={searchLocation} className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
      </div>

    </div>
  );
};

export default Map;
