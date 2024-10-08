"use client";
import { useEffect, useState } from "react";
import { getEvents } from "@/lib/firetore";
import Filter from "@/components/EventFilter";
import Card from "@/components/EventCard";
import Map from "@/components/Map";
export default function Dashboard() {
  const [eventos, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);


  return (
    <div className="w-full h-screen overflow-auto">
      <header className="flex min-h-16 bg-event-grey lg:border-l lg:border-slate-200 text-slate-100 text-lg font-semibold items-center px-5">
        <h1>Search Events</h1>
      </header>
      <main className="w-full p-5">
        <Filter></Filter>
        <Map events={eventos}></Map>

        <section className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 sm:mx-10 items-center">
          {eventos.length > 0 ? (
            
            eventos.map((event, index) => (
              
              <Card
                key={index}
                title={event.title}
                description={event.description}
                location={event.location}
                timeStamp={event.startTime}
                price={event.price}
                img={event.img}
              />
            ))
          ) : (
            <p>No events available</p>
          )}
        </section>
      </main>
    </div>
  );
}
