"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import {
  AiOutlineMenu,
  AiFillHome,
  AiFillBook,
  AiOutlineSearch,
  AiFillMessage,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi"; 
import { usePathname } from 'next/navigation'; 

const Sidebar = () => {
  const pathname = usePathname(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const isActive = (href) => pathname === href;

  return (
    <div className="relative ">
      {/* Botón para alternar la barra lateral */}
      <div className="flex w-screen justify-between p-2 bg-event-grey lg:hidden">
        <div className="flex items-center">
          <Image src="/img/generic-logo.webp" alt="Logo" width={170} height={65} />
        </div>
        <span
          className={`text-white text-4xl top-5 left-4 cursor-pointer ${
            isSidebarOpen ? "hidden" : ""
          }`}
          onClick={toggleSidebar}
        >
          <AiOutlineMenu className="px-2 bg-event-grey rounded-md" />
        </span>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 lg:left-0 lg:static lg:h-screen p-2 w-72 z-50 overflow-y-auto text-center bg-event-grey transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/img/generic-logo.webp" alt="Logo" width={200} height={65} />
            </div>
            <AiOutlineMenu
              className="cursor-pointer lg:hidden"
              onClick={toggleSidebar}
            />
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        {/* Search Bar */}
        <div className="p-2.5 flex items-center rounded-md px-4 bg-gray-700 text-white">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>

        {/* Menu Elements */}
        <Link
          href="/demo/user/dashboard"
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 ${
            isActive("/demo/user/dashboard") ? "border-b bg-white bg-opacity-5" : "hover:bg-blue-600"
          } text-white`}
        >
          <BiSolidCalendarEvent className="text-2xl" />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Search Events
          </span>
        </Link>

        <Link
          href="/demo/user/dashboard/saved" 
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 ${
            isActive("/demo/user/dashboard/saved") ? "border-b bg-white bg-opacity-5" : "hover:bg-blue-600"
          } text-white`}
        >
          <FaBookmark className="text-2xl" />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Saved Events
          </span>
        </Link>

        <Link
          href="/demo/user/my-events" 
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 ${
            isActive("/demo/user/my-events") ? "border-b bg-white bg-opacity-5" : "hover:bg-blue-600"
          } text-white`}
        >
          <MdOutlineEventAvailable className="text-2xl" />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            My Events
          </span>
        </Link>

        <div className=" my-4 bg-gray-600 h-[1px]"></div>

        {/* Menú desplegable */}
        <div
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 hover:bg-blue-600 text-white cursor-pointer ${
            pathname.startsWith("/chatbox") ? "bg-blue-600" : ""
          }`}
          onClick={toggleDropdown}
        >
          <AiFillMessage />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Chatbox
            </span>
            <span
              className={`text-sm transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              id="arrow"
            >
              <FiChevronDown />
            </span>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
            <Link href="/chatbox/social">
              <h1 className={`cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 ${
                isActive("/chatbox/social") ? "bg-blue-600" : ""
              }`}>
                Social
              </h1>
            </Link>
            <Link href="/chatbox/personal">
              <h1 className={`cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 ${
                isActive("/chatbox/personal") ? "bg-blue-600" : ""
              }`}>
                Personal
              </h1>
            </Link>
            <Link href="/chatbox/friends">
              <h1 className={`cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 ${
                isActive("/chatbox/friends") ? "bg-blue-600" : ""
              }`}>
                Friends
              </h1>
            </Link>
          </div>
        )}

        {/* Botón de Logout */}
        <div className={`p-2.5 mt-3 flex items-center rounded-md px-4 hover:bg-blue-600 text-white ${
          isActive("/logout") ? "bg-blue-600" : ""
        }`}>
          <AiOutlineLogout />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
