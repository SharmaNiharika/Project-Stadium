
import { useState } from "react";
import logo from "../assets/logo2.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isFitnessOpen, setIsFitnessOpen] = useState(false);

  return (
    <nav className="fixed top-0  z-30 w-full border-b border-gray-200 bg-black">
      <div className="mx-auto flex  flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center space-x-3">
          <img
            src={logo}
            className="h-10"
            alt="StadiumX Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-amber-300">
            StadiumX
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-amber-300 hover:bg-amber-500 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto bg-black`}
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-black p-4 font-medium md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-black md:p-0">
            <li>
              <a
                href="#" onClick={() => {setIsFitnessOpen (false); setIsSportsOpen(false);}}
                className="block rounded px-3 py-2 text-amber-300 md:p-0"
              >
                Home
              </a>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                type="button"
                onClick={() => {setIsSportsOpen(!isSportsOpen); setIsFitnessOpen(false);}}
                className="flex w-full items-center justify-between rounded px-3 py-2 text-amber-300 hover:bg-gray-100 md:w-auto md:p-0 md:hover:bg-transparent"
                aria-expanded={isSportsOpen}
              >
                Sports
                <svg
                  className="ms-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {isSportsOpen && (
                <div className="relative mt-2 w-full rounded-lg border border-amber-300/30 bg-black shadow-lg md:absolute  md:w-48">
                  <ul className="p-2 text-sm text-amber-300">
                    {["Cricket", "Football", "Basketball", "Badminton"].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block rounded px-3 py-2 text-amber-300 hover:bg-amber-300 hover:text-black"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li className="relative">
              <button
                type="button"
                onClick={() =>{ setIsFitnessOpen(!isFitnessOpen); setIsSportsOpen(false);}}
                className="flex w-full items-center justify-between rounded px-3 py-2 text-amber-300 hover:bg-gray-100 md:w-auto md:p-0 md:hover:bg-transparent"
                aria-expanded={isFitnessOpen}
              >
                Fitness
                <svg
                  className="ms-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {isFitnessOpen && (
                <div className="relative mt-2 w-full rounded-lg border border-amber-300/30 bg-black shadow-lg md:absolute  md:w-48">
                  <ul className="p-2 text-sm text-amber-300">
                    {["Gym", "Yoga", "Swimming", "Personal Training"].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block rounded px-3 py-2 text-amber-300 hover:bg-amber-300 hover:text-black"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {["Book Slot", "About Us"].map((item) => (
              <li key={item}>
                <a
                  href="#" onClick={() => {setIsFitnessOpen (false); setIsSportsOpen(false);}}
                  className="block rounded px-3 py-2 text-amber-300 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-amber-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
            <button className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
              SingIn/Logout
            </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
