
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {


  return (
    <nav className="bg-event-grey text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/img/generic-logo.webp" width={200} height={65} />
        </Link>
     

      </div>
    </nav>
  );
};
