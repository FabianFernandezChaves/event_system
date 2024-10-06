
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {


  return (
    <nav className="bg-event-grey text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/img/generic-logo.webp" width={200} height={65} />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link
                href="/demo"
                  className="text-white font-bold bg-event-orange hover:bg-orange-500 transition-colors duration-500  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-3 text-center"
                >
                  View Demo
                </Link>
        </div>

      </div>
    </nav>
  );
};
