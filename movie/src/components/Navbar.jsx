import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export function Navbar() {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    setIsDropdownOpen(false);
  };

  const MenuLinks = () => (
    <ul className="flex flex-col p-4 md:p-full mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  <li>
    <a 
      href="#" 
      className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" 
      aria-current="page" 
      onClick={() => navigate('/')}
    >
      Эхлэл
    </a>
  </li>
  <li>
    <a 
      href="#" 
      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" 
      onClick={() => navigate('/comingSoon')}
    >
      Тун Удахгүй
    </a>
  </li>
  <li>
    <a 
      href="#" 
      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" 
      onClick={() => navigate('/movie')}
    >
      Захиалга
    </a>
  </li>
</ul>
  );

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="src/assets/theatreIcon.svg" className="h-8" alt="logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            iCinema
          </span>
        </a>

        {/* Right Section */}
        <div className="flex md:order-2 gap-2">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <span className="sr-only">Open menu</span>
          </button>

          {isUserLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"
              >
                <img
                  src="src/assets/man.png"
                  alt="User Icon"
                  className="h-8 w-8 rounded-full"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 z-20">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="me-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Нэвтрэх
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div
  className={`${
    isMobileMenuOpen ? "absolute left-0" : "hidden"
  } w-full md:hidden z-10 pt-52`}
  onClick={() => setIsMobileMenuOpen(false)}
>
  <MenuLinks />
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex md:w-auto md:order-1">
          <MenuLinks />
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <Login
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={() => {
            setIsUserLoggedIn(true);
            setIsLoginOpen(false);
          }}
          onSignupOpen={() => {
            setIsSignupOpen(true);
            setIsLoginOpen(false);
          }}
        />
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <Signup
          onClose={() => setIsSignupOpen(false)}
          onSignupSuccess={() => setIsSignupOpen(false)}
          onLoginOpen={() => {
            setIsLoginOpen(true);
            setIsSignupOpen(false);
          }}
        />
      )}
    </nav>
  );
}
