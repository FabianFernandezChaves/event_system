import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { useState, useEffect } from "react";
import { formatPrice } from "@/utils/formatPrice";
import { formatDate, formatTime } from "@/utils/formatDate";
import { getShortAddressFromCoordinatesOSM } from "@/utils/geolocation";

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
 * @param {string} props.eventId - The unique ID of the event from Firebase.
 * @returns {JSX.Element} A card displaying event information.
 */
export default function EventCard({ title, description, price, location, timeStamp, img, eventId }) {
  const [isFavorite, setIsFavorite] = useState(true);
  const [address, setAddress] = useState('');

  const formattedPrice = formatPrice(price, 'USD'); 
  const formattedDate = formatDate(timeStamp);
  const formattedTime = formatTime(timeStamp);

  useEffect(() => {
    if (location && location.latitude && location.longitude) {
      getShortAddressFromCoordinatesOSM(location.latitude, location.longitude)
        .then(setAddress)
        .catch((error) => console.error(error));
    }
  }, [location]);

  return (
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
            {address || 'Loading address...'}
          </span>
        </div>

        {/* The price button links to the dynamic route based on the eventId */}
        <Link
          href={`/demo/user/dashboard/eventPage/${eventId}`}
          className="px-3 py-2 min-w-16 text-center rounded-md drop-shadow-md bg-event-green opacity-90 text-slate-50 text-xs font-semibold"
        >
          {formattedPrice}
        </Link>
      </div>
    </div>
  );
}
