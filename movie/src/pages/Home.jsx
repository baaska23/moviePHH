import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HomeMovieCard from "../components/HomeMovieCard";

export default function Home() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3001/home_movie");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const slides = [
    { src: "/src/assets/car1.jpg", alt: "Sky" },
    { src: "/src/assets/car2.jpg", alt: "Ball" },
    { src: "/src/assets/car3.jpeg", alt: "Ball" },
  ];

  const updateSlide = (index) => {
    setCurrentIndex((prev) => (index + slides.length) % slides.length);
  };


  const cards = [
    {
      id: 1,
      title: "A Christmas Story",
        date: " Dec 15, 2024",
      image: "src/assets/movie/christmas_story.jpg",
    },
    {
      id: 2,
      title: "Avatar: The Way of Water",
        date: " Dec 30, 2024",
      image: "src/assets/movie/avatar.jpg",
    },
    {
      id: 3,
      title: "Doctor Strange in the Multiverse of Madness",
        date: " Jan 25, 2025",
      image: "src/assets/movie/doctor.jpg",
    },
    {
      id: 4,
      title: " Thor: Love and Thunder",
        date: " Jan 30, 2024",
      image: "/src/assets/movie/thor.jpg",
    },
    {
      id: 5,
      title: "The Matrix Resurrections",
        date: " Jan 5, 2024",
      image: "/src/assets/movie/matrix.png",
    },
    {
      id: 6,
      title: "Wonka",
        date: " Dec 25, 2024",
      image: "src/assets/movie/wonka.jpg",
    },
    {
      id: 7,
      title: "Blue Beetle",
        date: " Jan 25, 2025",
      image: "src/assets/movie/beetle.jpg",
    },
    {
      id: 8,
      title: "Jurassic World: Dominion",
        date: " Jan 20, 2024",
      image: "src/assets/movie/jurassic.jpeg",
    },
  ];
 
  useEffect(() => {
    // Adjust the number of cards displayed per view based on the screen width
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth < 640 ? 1 : 4);
    };
 
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);
 
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cards.length - cardsPerView ? prevIndex + 1 : 0
    );
  };
 
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cards.length - cardsPerView
    );
  };


  return (
    <>
      <div id="default-carousel" className="relative w-full">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                index === currentIndex ? "block" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => updateSlide(currentIndex - 1)}
          data-carousel-prev
        >
          &lt;
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => updateSlide(currentIndex + 1)}
          data-carousel-next
        >
          &lt;
        </button>
      </div>

      <div className="flex justify-center items-center h-full">
        <h2 className="text-2xl font-bold my-8">МАНАЙ ДЭЛГЭЦНЭЭ</h2>
      </div>

      <hr className="mb-3 border-gray-300 dark:border-gray-200 mx-20" />


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16">
  {movies.map((movie) => (
    <HomeMovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      genre={movie.genre}
      poster={movie.poster}
      airDate={movie.air_date}
    />
  ))}
</div>


      <div className="grid place-items-center h-full py-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/bookTicket")}
        >
          Бусад
        </button>
      </div>

      <section id="advertise">
        <img src="/src/assets/banner.png" alt="banner" />
      </section>

      <div className="flex justify-center items-center h-full">
        <h2 className="text-2xl font-bold my-8">ТУН УДАХГҮЙ</h2>
      </div>
      <div className="flex justify-center items-center py-10 ">
      <div className="w-full max-w-7xl px-2">
        <div className="relative">
          <div className="flex justify-center space-x-4 ">
            {cards
              .slice(currentIndex, currentIndex + cardsPerView)
              .map((card) => (
                <div
                  key={card.id}
                  className="flex-none w-full sm:w-1/4 bg-white dark:bg-gray-900 dark:border-gray-500 border border-gray-200 rounded-lg shadow"
 
                >
                  <img
                    className="w-full h-96 object-cover mb-4 rounded-lg"
                    src={card.image}
                    alt={card.title}
                  />
                  <h3 className="text-2xl font-bold pl-4">{card.title}</h3>
                  <p className="text-gray-500 pl-4 pb-4">{card.date}</p>
                </div>
              ))}
          </div>
          <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrev}
        data-carousel-prev
      > &lt;
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
          <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNext}
        data-carousel-next
      >  &lt;
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
        </div>
      </div>
    </div>
    </>
  );
}
