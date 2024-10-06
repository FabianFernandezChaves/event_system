import Link from "next/link";

export default function SigninCard() {
  return (
    <div className="px-5 text-gray-700">
      <div className="min-w-72 max-w-lg grid grid-cols-1 m-auto bg-slate-50 p-10">
        <h4 className="text-xl font-bold text-gray-800">Sign Up</h4>
        <span className="mt-1 font-normal text-gray-700">
          Nice to meet you! Enter your details to register.
        </span>
        <form className="mt-8 mb-2  w-full ">
          <div className="mb-1 flex flex-col gap-6">
            <label className="-mb-3 text-base text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Name Lastname"
              className="text-sm rounded-md border !border-gray-200 focus:!border-t-gray-500 py-3 px-2"
            />
            <label className="-mb-3 text-base">Your Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              className="text-sm rounded-md border !border-gray-200 focus:!border-t-gray-500 py-3 px-2"
            />
            <label className="-mb-3 text-base">Your Password</label>
            <input
              type="password"
              placeholder="*************"
              className="text-sm rounded-md border !border-gray-200 focus:!border-t-gray-500 py-3 px-2"
            />
            <div>
              <input type="checkbox" />
              <label className="ml-2 text-sm font-normal text-gray-700">
                I agree the
                <a
                  href="#"
                  className="font-semibold transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </label>
            </div>
            <button className="min-w-40 max-w-52 m-auto text-white font-bold bg-event-orange hover:bg-orange-500 transition-colors duration-500  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-3 text-center">
              Sign In
            </button>
            <span className="m-auto decoration text-center font-normal">
              Already have an account?{" "}
              <Link href="/demo/user" className="font-semibold underline text-gray-900">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
