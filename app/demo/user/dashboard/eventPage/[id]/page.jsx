
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import { formatDate, formatTime } from "@/utils/formatDate";
import { getEventById } from "@/lib/firetore";

/**
 * Event Details Page Component with Server-Side Rendering
 *
 * This function fetches the event data on the server before rendering the page.
 * It ensures that the event content is available in the HTML response, optimizing for SEO.
 *
 * @param {Object} params - The route parameters, including the event ID.
 * @returns {JSX.Element} The rendered event details page.
 */
export default async function EventDetails({ params }) {
  const { id } = params;

  // Fetch the event data from Firestore (on the server)
  const eventData = await getEventById(id);
  if (!eventData) {
    return <div>Event not found.</div>;
  }

  // Format the price, date, and time using utility functions
  const formattedPrice = formatPrice(eventData.price, 'USD');
  const formattedDate = formatDate(eventData.startTime);
  const formattedTime = formatTime(eventData.startTime);

  return (
    <main className="w-full grid grid-cols-12">
      <section className="w-full  col-span-9">
        <div className="w-full h-fit ">
          <Image
            src={eventData.img}
            alt={eventData.title}
            width={1000}
            height={500}
            style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="py-2 px-4 mx-20 grid gap-2">
          <div className="flex gap-2 text-lg text-slate-400">
            <span >{formattedDate}</span>-<span>{formattedTime}</span>
          </div>
          <h1 className="block font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {eventData.title}
          </h1>
          <p className="block max-h-16  font-sans text-pretty text-lg font-normal leading-relaxed text-gray-500 antialiased">
            {eventData.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat minima incidunt rem cum sapiente amet, architecto maiores recusandae, deserunt ipsa facilis accusamus est dignissimos saepe eos asperiores, dolorum veniam odit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sint cum perferendis ut vitae ullam. Perferendis eos quaerat blanditiis non, quas accusantium sit earum saepe aliquam reprehenderit aliquid cum adipisci!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deserunt, ut fugit esse eius doloremque, sint quasi molestiae architecto dignissimos recusandae soluta corporis mollitia a dolorum iusto. Earum, sint unde.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempore. Asperiores enim quibusdam odit deserunt quo dignissimos, ratione ex suscipit nobis saepe quam incidunt magni qui nemo exercitationem ut. Ducimus!
          </p>
        </div>

      </section>
      <section className="max-w-28"></section>
    </main>
  );
}
