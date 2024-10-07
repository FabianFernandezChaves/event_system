'use client'
import Filter from "@/components/EventFilter";
import Card from "@/components/EventCard";
import Map from "@/components/Map";
export default function Dashboard() {
  
  const events = [
    { nombre: 'Evento 1', lat: 9.9281, lng: -84.0907, imageUrl: '/img/calendar-meet.webp', descripcion: 'Descripción del Evento 1' },
    { nombre: 'Evento 2', lat: 10.0153, lng: -84.2146, imageUrl: '/img/calendar-meet.webp', descripcion: 'Descripción del Evento 2' },
  ];

  return (
    <div className="w-full h-screen overflow-auto">
    <header className="flex min-h-16 bg-event-grey lg:border-l lg:border-slate-200 text-slate-100 text-lg font-semibold items-center px-5">
      <h1>
        Search Events
      </h1>
    </header>
    <main  className="w-full p-5">
      <Filter></Filter>
      <Map events={events}>
      </Map>

      <section className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 sm:mx-10 items-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
    </main>
    </div>
  );
}
