import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const Home = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <main className="px-20">
      <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
        {/* Logo and Navigation */}
        <div className="flex items-center justify-between">
          <h1 className="text-[4rem] font-semibold">
            <span className="text-green-600">Auth</span>Hub.
          </h1>

          {isAuthenticated ? (
            <Link
              to={"/dashboard"}
              className="bg-green-600 px-12 py-4 text-3xl rounded-full text-white font-semibold hover:bg-green-700 transition-all duration-200 ease-in"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to={"/signup"}
              className="bg-green-600 px-12 py-4 text-3xl rounded-full text-white font-semibold hover:bg-green-700 transition-all duration-200 ease-in"
            >
              Join Now
            </Link>
          )}
        </div>

        {/* Seperator */}
        <div className="h-60 md:h-40 sm:h-20"></div>

        {/* Hero Section */}
        <p className="text-4xl font-bold tracking-wider text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
          Secure Registration, Simplified.
        </p>
        <div className="h-16"></div>
        <p className="max-w-6xl text-xl font-light text-gray-300 tracking-widest md:text-2xl">
          Experience seamless, safe, and easy signup with email OTP verification
          designed for absolute peace of mind.
        </p>

        {/* Seperator */}
        <div className="h-32 md:h-40"></div>

        {/* Section 1 */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-6 self-start inline text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
              Get Started Today
            </p>
            <h2 className="text-4xl font-semibold">
              Made for devs and designers.
            </h2>
            <div className="h-6"></div>
            <p className="text-2xl text-gray-400 md:pr-10 text-justify">
              Welcome to a new standard in secure online registration! Our
              OTP-based email verification system offers a fast, reliable, and
              secure way to ensure only the right people access your platform.
              Join us to experience a hassle-free, secure signup process built
              for your safety.
            </p>
            <div className="h-8"></div>
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
              <div>
                <p className="font-semibold text-3xl text-gray-400">
                  We are human-focused
                </p>
                <div className="h-4"></div>
                <p className="italic text-gray-400 text-2xl text-justify">
                  Driven by security, designed for people
                </p>
              </div>
              <div>
                <p className="font-semibold text-3xl text-gray-400">
                  Let&apos;s grow together
                </p>
                <div className="h-4"></div>
                <p className="italic text-gray-400 text-2xl text-justify">
                  Join a community built on trust, integrity, and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96 relative">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg md:rounded-l-full z-10"></div>
              <img
                src="https://images.pexels.com/photos/8037008/pexels-photo-8037008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover rounded-lg md:rounded-l-full"
              />
            </div>
          </div>
        </div>

        {/* Seperator */}
        <div className="h-32 md:h-40"></div>

        {/* Section 2 */}
        <p className="text-3xl">
          <span className="text-gray-200 text-justify">
            Welcome to a new standard in secure online registration!{" "}
          </span>

          <span className="text-gray-500 pl-2 text-justify">
            Our OTP-based email verification system offers a fast, reliable, and
            secure way to ensure only the right people access your platform.
            Join us to experience a hassle-free, secure signup process built for
            your safety.
          </span>
        </p>

        {/* Seperator */}
        <div className="h-32 md:h-40"></div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-700 to-black">
            <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
              1
            </p>
            <div className="h-12"></div>
            <p className=" text-3xl italic">
              Built with dedication, to offer you the best.
            </p>
          </div>
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-800 to-black">
            <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
              2
            </p>
            <div className="h-12"></div>
            <p className=" text-3xl italic">
              Protection that&apos;s powerful yet effortless.
            </p>
          </div>
          <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-800 to-black">
            <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
              3
            </p>
            <div className="h-12"></div>
            <p className=" text-3xl italic">
              From idea to execution—sign up in minutes
            </p>
          </div>
        </div>

        {/* Seperator */}
        <div className="h-40"></div>

        {/* Section 3 */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center md:col-span-2">
            <p className="mb-6 self-start inline text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
              Seamless Integration
            </p>
            <h2 className="text-4xl font-bold">We could work together -</h2>
            <div className="h-6"></div>
            <p className="text-xl text-gray-400 md:pr-10">
              Benefit from the latest security measures with every registration.
            </p>
            <div className="h-8"></div>
            <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 gap-y-8 pt-8 border-t border-gray-800">
              <div>
                <p className="font-semibold text-3xl text-gray-400">
                  Effortless Verification
                </p>
                <div className="h-4"></div>
                <p className="italic text-gray-400 text-2xl text-justify">
                  With a single email OTP, users are verified in seconds,
                  ensuring security without hassle.
                </p>
              </div>
              <div>
                <p className="font-semibold text-3xl text-gray-400">
                  Cross-Platform Compatibility
                </p>
                <div className="h-4"></div>
                <p className="italic text-gray-400 text-2xl text-justify">
                  Access and verify accounts from any device, anywhere, for a
                  seamless user experience.
                </p>
              </div>
              <div>
                <p className="font-semibold text-3xl text-gray-400 text-justify">
                  Customizable Experience
                </p>
                <div className="h-4"></div>
                <p className="italic text-gray-400 text-2xl">
                  Tailor the registration flow to match your brand and user
                  expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96 relative">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg md:rounded-l-full z-10"></div>
              <img
                src="https://images.pexels.com/photos/5380597/pexels-photo-5380597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover rounded-lg md:rounded-l-full"
              />
            </div>
          </div>
        </div>

        <div className="h-10 md:h-40"></div>
        <div className="h-8 border-t border-gray-800"></div>
        {/* Footer */}
        <div className="grid gap-4 md:grid-cols-4 mt-8">
          <ul className="space-y-4 text-gray-400">
            <li className="pb-4 text-3xl text-green-500">Social networks</li>
            <li>
              <a
                href="#"
                className="hover:underline text-2xl"
              >
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                Facebook
              </a>
            </li>
          </ul>
          <ul className="space-y-4 text-gray-400">
            <li className="pb-4 text-3xl text-green-500">Locations</li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                Paris
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                New York
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                London
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                Singapour
              </a>
            </li>
          </ul>
          <ul className="space-y-4 text-gray-400">
            <li className="pb-4 text-3xl text-green-500">Company</li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                The team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                Our vision
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-2xl">
                Join us
              </a>
            </li>
          </ul>
          <ul className="space-y-1 text-gray-400 flex w-full justify-center items-center">
            <li>
              <Link to={"/signup"} className="bg-green-600 px-12 py-4 text-3xl rounded-full text-white font-semibold hover:bg-green-700 transition-all duration-200 ease-in">
                Join Now
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-12"></div>
      </div>
    </main>
  );
};

export default Home;
