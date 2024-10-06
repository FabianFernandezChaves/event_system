import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
export default function EventCard() {
  const [isFavorite, setIsFavorite] = useState(true);
  return (
    <>
      <div className="relative flex m-auto mx-0.5 max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
          className="rounded-t-xl "
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="ui/ux review check"
          />
        </div>
        <div className="absolute top-0 right-0 flex items-center rounded-full w-fit  m-3 p-3 bg-slate-100 drop-shadow-md">
          {isFavorite ? (
            <FaBookmark className="text-2xl text-event-orange drop-shadow-md" />
          ) : (
            <FaRegBookmark className="text-2xl text-event-orange drop-shadow-md" />
          )}
        </div>
        <div className="py-2 px-4 grid gap-2">
          <div className="flex gap-2 text-sm text-slate-400">
            <span>25 Jul, 2025</span>-<span>01:30 PM</span>
          </div>
          <h4 className="block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Lorem ipsum dolor
          </h4>
          <p className="block max-h-16  truncate font-sans text-pretty text-sm font-normal leading-relaxed text-gray-500 antialiased">
            Lorem ipsum dolor sit amet quack consectetur adipisicing et elit.
            Praesentium eum aspernatur iste.
          </p>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center w-2/4">
            <FaLocationDot className="text-lg text-rose-500 drop-shadow-md mr-1" />
            <span className="text-xs font-medium  text-slate-500 truncate ">
              Alajuelita, San José
            </span>
          </div>

          <Link
            href={""}
            className="px-3 py-2 min-w-16 text-center rounded-md drop-shadow-md bg-event-green opacity-90 text-slate-50 text-xs font-semibold"
          >
            $2000.99
          </Link>
        </div>
      </div>
    </>
  );
}
