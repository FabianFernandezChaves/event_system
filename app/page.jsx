import Footer from "@/components/Footer";
import Navbar from "@/components/IndexNavbar";
import Image from "next/image";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <main className="w-full m-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="w-full flex flex-col items-center bg-calendar-meet bg-no-repeat bg-cover h-[70vh] text-white">
          <div className="bg-gradient-to-r from-[rgb(15,17,19)] to-[rgba(14,141,148,0.7)] h-full w-full content-center  p-10">
            <div className="max-w-screen-xl m-auto grid grid-cols-6 gap-10">
              <div className="col-span-6 content-center md:col-span-3">
                <h1 className="text-3xl md:text-5xl">
                  Welcome to <span>EventManager</span>
                </h1>
                <h2 className="text-xl md:text-2xl">
                  The Comprehensive Solution for Event Management
                </h2>

                <p className="text-sm md:text-lg my-10">
                  EventManager is an all-in-one platform designed to simplify
                  event management. From initial planning to final execution,
                  our tool provides everything you need to create successful and
                  memorable events.
                </p>
                <Link
                  href="/demo"
                  className="text-white font-bold bg-event-orange hover:bg-orange-500 transition-colors duration-500  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-3 text-center"
                >
                  View Demo
                </Link>
              </div>
              <div className="col-span-3 content-center hidden md:grid items-center ">
                <Image
                  src="/img/ilustrative.webp"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center bg-no-repeat bg-cover p-10 py-0  ">
          <div className="h-full w-full content-center">
            <div className="max-w-screen-xl m-auto grid grid-cols-6">
              <div className="col-span-6 ">
                <h2 className="text-2xl font-bold my-10">
                  What can EventManager do?
                </h2>

                <ul className="list-none text-base md:text-lg md:px-10 my-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                  <li className="flex gap-x-5">
                    <div>
                      <FaCircleCheck className="text-3xl m-1 text-event-green" />
                    </div>
                    <div>
                      <span className="font-bold">Event Planning:</span> Create
                      and organize events with our intuitive planning system.
                      Easily set dates, locations, and schedules.
                    </div>
                  </li>
                  <li className="flex gap-x-5">
                    <div>
                      <FaCircleCheck className="text-3xl m-1 text-event-green" />
                    </div>
                    <div>
                      <span className="font-bold">
                        Registration and Ticket Sales:
                      </span>{" "}
                      Facilitate attendee registration and ticket sales through
                      our secure and user-friendly platform.
                    </div>
                  </li>
                  <li className="flex gap-x-5">
                    <div>
                      <FaCircleCheck className="text-3xl m-1 text-event-green" />
                    </div>
                    <div>
                      <span className="font-bold">Guest Management:</span> Send
                      invitations, manage RSVPs, and keep a detailed record of
                      all your guests.
                    </div>
                  </li>
                  <li className="flex gap-x-5">
                    <div>
                      <FaCircleCheck className="text-3xl m-1 text-event-green" />
                    </div>
                    <div>
                      <span className="font-bold">
                        Effective Communication:
                      </span>{" "}
                      Keep your guests informed with automatic notifications and
                      real-time updates.
                    </div>
                  </li>
                  <li className="flex gap-x-5">
                    <div>
                      <FaCircleCheck className="text-3xl m-1 text-event-green" />
                    </div>
                    <div>
                      <span className="font-bold">Analysis and Reports:</span>{" "}
                      Gain detailed insights into attendance, engagement, and
                      the success of your events with our analytical reports.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
