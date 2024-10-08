import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * EventCard component
 * 
 * This component displays a card with information about an event, including the title, description,
 * date, time, location, price, and an option to mark the event as a favorite.
 * 
 * @param {Object} props - The component properties.
 * @param {string} props.title - The event title.
 * @param {string} props.description - The event description.
 * @param {number} props.price - The event price.
 * @param {Object} props.location - The object containing the event's location coordinates (latitude and longitude).
 * @param {Object} props.timeStamp - Firebase Timestamp object representing the event's date and time.
 * @param {string} props.img - The URL of the event image.
 * @returns {JSX.Element} A card displaying event information.
 */
export default function EventCard({ title, description, price, location, timeStamp, img }) {
  /**
   * @type {boolean} isFavorite - State to control whether the event is marked as a favorite.
   */
  const [isFavorite, setIsFavorite] = useState(true);

  /**
   * @type {string} address - State to store the address retrieved from the event's coordinates.
   */
  const [address, setAddress] = useState(''); 

  /**
   * Format the event price to always show two decimal places.
   * @type {string}
   */
  const formattedPrice = Number(price).toFixed(2);

  /**
   * Convert the Firebase Timestamp to a JavaScript Date object.
   * @type {Date}
   */
  const eventDate = timeStamp.toDate();

  /**
   * Format the date in a short format (e.g., "25 Jul, 2025").
   * @type {string}
   */
  const formattedDate = eventDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",  // Short month format: "Jul"
    year: "numeric"
  });

  /**
   * Format the time in a 24-hour format (e.g., "14:30").
   * @type {string}
   */
  const formattedTime = eventDate.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit"
  });

  /**
   * Fetch a short version of the address from the provided coordinates (latitude and longitude).
   * 
   * @async
   * @param {number} latitude - The latitude of the event location.
   * @param {number} longitude - The longitude of the event location.
   * @returns {Promise<string|null>} The short address in the format "City, Country", or null if an error occurs.
   */
  const getShortAddressFromCoordinatesOSM = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Extract city and country from the address components
      const city = data.address.city || data.address.town || data.address.village;
      const country = data.address.country;

      // Return a short version of the address
      return `${city}, ${country}`;
    } catch (error) {
      console.error('Error fetching address:', error);
      return null;
    }
  };

  /**
   * useEffect hook to fetch the address when the component mounts.
   * The effect runs whenever the location changes.
   */
  useEffect(() => {
    if (location && location.latitude && location.longitude) {
      getShortAddressFromCoordinatesOSM(location.latitude, location.longitude)
        .then((shortAddress) => setAddress(shortAddress))  // Set the address in the state
        .catch((error) => console.error(error));
    }
  }, [location]);  // The effect depends on the location prop

  return (
    <>
      <div className="relative flex m-auto mx-0.5 max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img className="rounded-t-xl" src={img} alt="Event preview" />
        </div>
        <div className="absolute top-0 right-0 flex items-center rounded-full w-fit m-3 p-3 bg-slate-100 drop-shadow-md">
          {isFavorite ? (
            <FaBookmark className="text-2xl text-event-orange drop-shadow-md" />
          ) : (
            <FaRegBookmark className="text-2xl text-event-orange drop-shadow-md" />
          )}
        </div>
        <div className="py-2 px-4 grid gap-2">
          <div className="flex gap-2 text-sm text-slate-400">
            <span>{formattedDate}</span>-<span>{formattedTime}</span>
          </div>
          <h4 className="block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="block max-h-16 truncate font-sans text-pretty text-sm font-normal leading-relaxed text-gray-500 antialiased">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center w-2/4">
            <FaLocationDot className="text-lg text-rose-500 drop-shadow-md mr-1" />
            <span className="text-xs font-medium text-slate-500 truncate">
              {address || 'Loading address...'}  {/* Displays the short address or a loading message */}
            </span>
          </div>

          <Link
            href={""}
            className="px-3 py-2 min-w-16 text-center rounded-md drop-shadow-md bg-event-green opacity-90 text-slate-50 text-xs font-semibold"
          >
            ${formattedPrice}
          </Link>
        </div>
      </div>
    </>
  );
}
