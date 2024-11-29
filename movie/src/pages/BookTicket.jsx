import React from "react";
import MovieCard from "../components/MovieCard";

export default function BookTicket() {
  // Sample movie data
  const movies = [
    {
      title: "Oppenheimer",
      poster: "/src/assets/movie/dunkirk.jpg",
      description: "Directed by Christopher Nolan, a historical biography.",
      timings: ["11:50", "13:40"],
    },
    {
      title: "Batman",
      poster: "/src/assets/movie/dunkirk.jpg",
      description: "Directed by Matt Reeves, action-packed adventure.",
      timings: ["16:40", "19:45", "22:10"],
    },
    {
      title: "Napoleon",
      poster: "/src/assets/movie/dunkirk.jpg",
      description: "A biography of the iconic French leader.",
      timings: ["12:00"],
    },
    {
        title: "Dunkirk",
        poster: "/src/assets/movie/dunkirk.jpg",
        description: "A historical drama directed by Christopher Nolan.",
        timings: ["12:00", "14:30", "17:00", "19:30", "22:00"],
    },
    {
        title: "Inception",
        poster: "/src/assets/movie/dunkirk.jpg",
        description: "A science fiction action film",
        timings: ["11:00", "13:30", "16:00", "18:30", "21:00"],
    }
  ];

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Өргөө 3: Шангри-Ла төв
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>

      <span className="text-gray-700 dark:text-gray-200 text-sm mt-4 block">
        Үзвэр: Өнөөдөр, Бямба, 9-р сарын 23
      </span>

      {/* Movie Cards Section */}
      <div className="mt-6">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            poster={movie.poster}
            description={movie.description}
            timings={movie.timings}
          />
        ))}
      </div>
    </>
  );
}
