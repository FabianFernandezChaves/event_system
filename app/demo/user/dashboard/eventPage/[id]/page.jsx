import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import { formatDate, formatTime } from "@/utils/formatDate";
import LocationComponent from "@/components/LocationComponent";  // Import the location component
import { getEventById } from "@/lib/firetore";

/**
 * Event Details Page Component with Server-Side Rendering
 *
 * Fetches event data from Firestore on the server.
 * 
 * @param {Object} params - The route parameters, including the event ID.
 * @returns {JSX.Element} Server-rendered event details page.
 */
export default async function EventDetails({ params }) {
  const { id } = params;

  // Fetch the event data from Firestore (on the server)
  const eventData = await getEventById(id);
  if (!eventData) {
    return <div>Event not found.</div>;
  }

  // Format the price, date, and time using utility functions
  const formattedPrice = formatPrice(eventData.price, "USD");
  const formattedDate = formatDate(eventData.startTime);
  const formattedTime = formatTime(eventData.startTime);
  
  return (
    <main className="w-full grid grid-cols-12 h-fit">
      <section className="col-span-12 h-fit">
        <div className="w-full h-fit ">
          <Image
            src={eventData.img}
            alt={eventData.title}
            width={1000}
            height={500}
            style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="w-full col-span-9">
        <div className="py-2 px-4 mx-20 grid gap-2">
          <div className="flex gap-2 text-lg text-slate-400">
            <span>{formattedDate}</span>-<span>{formattedTime}</span>
          </div>
          <h1 className="block font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {eventData.title}
          </h1>
          <p className="block max-h-16 font-sans text-lg font-normal text-gray-500 antialiased">
            {eventData.description}
          </p>
        </div>
      </section>

      {/* Render Location Component */}
      <section className="py-4 mx-4 col-span-3">
        <h3 className="text-3xl pb-4">Location</h3>
        <LocationComponent latitude={eventData.location.latitude} longitude={eventData.location.longitude} />
      </section>
    </main>
  );
}
