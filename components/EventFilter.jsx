"use client";
import { FaFilter } from "react-icons/fa6";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function EventFilter() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const CheckOption = ({ option, optionId }) => {
    return (
      <label className="flex items-center w-fit my-2 mr-3 text-sm max-w-24 overflow-hidden text-ellipsis font-normal text-gray-600 leading-4 cursor-pointer">
        <input type="checkbox" id={optionId} className="w-fit mr-2 " />
        {option}
      </label>
    );
  };

  const CheckedFilterGroup = ({ children }) => {
    return (
      <div className="filter-content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 card-body py-1 min-w-fit">
          {children}
        </div>
      </div>
    );
  };
  const FilterGroup = ({ children }) => {
    return (
      <div className="filter-content">
        <div className="grid grid-cols-1 xl:grid-cols-1 card-body py-1 ">
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-3 gap-2 grid grid-cols-1 sm:flex justify-center items-center ">
        <button
          type="button"
          className="flex gap-1   order-last sm:order-first items-center text-white font-bold bg-event-orange hover:bg-orange-500 transition-colors duration-500  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-3 text-center w-fit"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          Filters <FaFilter />
        </button>
        <input
          type="text"
          className="w-full max-w-3xl min-w-64 border-2 p-2 order-first sm:order-last"
          placeholder="Search for Startups..."
          id="search-filter"
        />
      </div>

      {filtersOpen && (
        <div
          id="filters"
          className="fixed   lg:left-1/4 xl:left-1/4 z-10 grid items-center justify-center bg-slate-100 
        rounded-md max-h-fit min-w-fit p-5 mt-2 mr-5 overflow-none border drop-shadow-md"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <article className="m-2 h-full border-r p-2">
              <header className="card-header">
                <h6 className="font-semibold text-base text-slate-800">
                  Topic
                </h6>
              </header>
              <CheckedFilterGroup>
                <CheckOption option={"Art"} optionId={"genArt"} />
                <CheckOption option={"Music"} optionId={"genMusic"} />
                <CheckOption option={"Education"} optionId={"genEducation"} />
                <CheckOption
                  option={"Technohhhwwwwhlogy"}
                  optionId={"genTechnology"}
                />
                <CheckOption option={"Paint"} optionId={"genPaint"} />
                <CheckOption option={"Dance"} optionId={"genDance"} />
              </CheckedFilterGroup>
            </article>

            <article className="m-2  h-full md:border-r p-2">
              <header className="card-header">
                <h6 className="font-semibold text-base text-slate-800">
                  Topic
                </h6>
              </header>
              <CheckedFilterGroup>
                <CheckOption option={"Art"} optionId={"genArt"} />
                <CheckOption option={"Music"} optionId={"genMusic"} />
                <CheckOption option={"Education"} optionId={"genEducation"} />
                <CheckOption option={"Technwgy"} optionId={"genTechnology"} />
                <CheckOption option={"Paint"} optionId={"genPaint"} />
                <CheckOption option={"Dance"} optionId={"genDance"} />
              </CheckedFilterGroup>
            </article>

            <article className="m-2  h-full border-r md:border-none p-2">
              <header className="card-header">
                <h6 className="font-semibold text-base text-slate-800">
                  Price
                </h6>
              </header>
              <div class="flex items-center mb-5 gap-1">
                <div class="relative w-full">
                  <select
                    id="FROM"
                    class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                  >
                    <option selected>Min</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                    <option value="option 4">option 4</option>
                  </select>
                  <svg
                    class="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                      stroke="#111827"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p class="px-1 font-normal text-sm leading-6 text-gray-600">
                  to
                </p>
                <div class="relative w-full">
                  <select
                    id="FROM"
                    class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                  >
                    <option selected>Max</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                    <option value="option 4">option 4</option>
                  </select>
                  <svg
                    class="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                      stroke="#111827"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </article>

            <article className="m-2  h-full border-r  p-2">
              <header className="card-header ">
                <h6 className="font-semibold text-base text-slate-800">
                  Date range
                </h6>
              </header>
              <FilterGroup>
                <Datepicker
                  primaryColor={"lime"}
                  classNames={"max-w-20"}
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  showShortcuts={false}
                />
              </FilterGroup>
            </article>

            <article className="m-2  h-full border-r p-2">
              <header className="card-header">
                <h6 className="title">Stage</h6>
              </header>
              <div className="filter-content">
                <div className="card-body space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Completed
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Processing
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Pending
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Something else
                  </label>
                </div>
              </div>
            </article>
          </div>
          <a
            href="#"
            className="btn btn-medium button my-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow mx-auto block"
          >
            Apply Now
          </a>
        </div>
      )}
    </>
  );
}
