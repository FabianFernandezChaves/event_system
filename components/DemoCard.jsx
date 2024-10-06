import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaCircleCheck } from "react-icons/fa6";

export default function DemoCard({title, characteristics = [], className, route}) {
  return (
    <div className={`w-full max-w-sm p-4 m-auto text-center border border-gray-200 rounded-lg shadow sm:p-8 ${className}`}>
      <div className="w-full bg-black/50 rounded-md">
      <h2 className="flex justify-center">
        <span className="text-5xl font-extrabold  my-5">{title}</span>
      </h2>
      </div>
      
      <ul role="list" className="space-y-5 my-7">
        {characteristics.map((charact, index) => {
          return (
            <li key={index} className="flex">
              <FaCircleCheck />
              <span className="text-base font-normal leading-tight ms-3">
                {charact}
              </span>
            </li>
          );
        })}
      </ul>
      <Link
                  href={`${route}`}
                  className="text-white font-bold bg-event-orange hover:bg-orange-500 transition-colors duration-500  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-3 text-center"
                >
                  Go as {title}
                </Link>
    </div>
  );
}

DemoCard.propTypes = {
  title: PropTypes.string,
  characteristics: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  route: PropTypes.string,
}
