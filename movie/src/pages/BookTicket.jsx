import React from "react";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

export default function BookTicket() {
  const navigate = useNavigate();

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
  ];

  // Handle timing click
  const handleTimingClick = (movieTitle, timing) => {
    navigate("/selectSeat", {
      state: {
        movieTitle,
        timing,
      },
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Book a Ticket</h1>

      <div>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            poster={movie.poster}
            description={movie.description}
            timings={movie.timings}
            onTimingClick={handleTimingClick} // Pass the handler
          />
        ))}
      </div>
    </div>
  );
}
