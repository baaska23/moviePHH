import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// хэрэглэгчийн суудал сонгох хэсэг
export default function SelectSeat() {
  const navigate = useNavigate();

  //component хооронд дата дамжуулах функц
  const location = useLocation();
  console.log(location.state);
  const { movieTitle, moviePoster, timing } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);

  // боломжит суудлыг статикаар бүрдүүлэв
  const seats = [
    { id: 1, isAvailable: true },
    { id: 2, isAvailable: false },
    { id: 3, isAvailable: true },
    { id: 4, isAvailable: true },
    { id: 5, isAvailable: false },
    { id: 6, isAvailable: true },
    { id: 7, isAvailable: true },
    { id: 8, isAvailable: false },
    { id: 9, isAvailable: true },
    { id: 10, isAvailable: false },
    { id: 11, isAvailable: true },
    { id: 12, isAvailable: false },
    { id: 13, isAvailable: false },
    { id: 14, isAvailable: true },
    { id: 15, isAvailable: false },
    { id: 16, isAvailable: true },
    { id: 17, isAvailable: true },
    { id: 18, isAvailable: true },
    { id: 19, isAvailable: true },
    { id: 20, isAvailable: true },
    { id: 21, isAvailable: true },
    { id: 22, isAvailable: true },
    { id: 23, isAvailable: true },
    { id: 24, isAvailable: false },
    { id: 25, isAvailable: true },
    { id: 26, isAvailable: true },
    { id: 27, isAvailable: true },
    { id: 28, isAvailable: false },
    { id: 29, isAvailable: true },
    { id: 30, isAvailable: true },
    { id: 31, isAvailable: false },
    { id: 32, isAvailable: false },
    { id: 33, isAvailable: true },
    { id: 34, isAvailable: true },
    { id: 35, isAvailable: false },
    { id: 36, isAvailable: true },
    { id: 37, isAvailable: true },
    { id: 38, isAvailable: false },
    { id: 39, isAvailable: true },
    { id: 40, isAvailable: true },
    { id: 41, isAvailable: true },
    { id: 42, isAvailable: true },
    { id: 43, isAvailable: true },
    { id: 44, isAvailable: true },
    { id: 45, isAvailable: true },
    { id: 46, isAvailable: false },
    { id: 47, isAvailable: false },
    { id: 48, isAvailable: true },
    { id: 49, isAvailable: false },
    { id: 50, isAvailable: true },
  ];

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const incrementAdultTickets = () => setAdultTickets(adultTickets + 1);
  const decrementAdultTickets = () => {
    if (adultTickets > 0) setAdultTickets(adultTickets - 1);
  };
  const incrementChildTickets = () => setChildTickets(childTickets + 1);
  const decrementChildTickets = () => {
    if (childTickets > 0) setChildTickets(childTickets - 1);
  };

  const clearSelection = () => {
    if (window.confirm('Are you sure you want to clear all selections?')) {
      setSelectedSeats([]);
      setAdultTickets(0);
      setChildTickets(0);
    }
  };

  const adultTicketPrice = 10000;
  const childTicketPrice = 8000;
  const totalCost =
    adultTickets * adultTicketPrice + childTickets * childTicketPrice;

  const handleButtonClick = () => {
    if (selectedSeats.length < adultTickets + childTickets) {
      alert('Please select enough seats for all tickets.');
    } else {
      navigate('/payment', { state: { selectedSeats, adultTickets, childTickets } });
    
    
    }
  };

  const posterSrc = movieTitle === 'Oppenheimer' 
    ? '/src/assets/movie/oppenheimer.jpg' 
    : movieTitle === 'Batman'
    ? '/src/assets/movie/batman.jpg'
    : moviePoster

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Movie Information */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto flex items-center space-x-6">
          <img
            src={posterSrc} 
            alt="Movie Poster"
            className="w-36 h-52 rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-bold">{movieTitle || 'Movie Title'}</h1>
            <p className="text-gray-400">{timing || 'Timing Unavailable'} | Танхим-1</p>
          </div>
        </div>
      </div>

      {/* Seat Selection */}
      <div className="py-6">
      <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 50"
        className="w-32 h-16"
      >
        <path
          d="M 0 50 A 50 50 0 0 1 100 50"
          fill="none"
          stroke="gray"
          strokeWidth="2"
        />
      </svg>
    </div>
        <div className="container mx-auto">
          <h2 className="text-lg font-semibold mb-4">Та суудлаа сонгоно уу?</h2>
        
          <div className="grid grid-cols-10 gap-2 justify-center">
            {seats.map((seat) => (
              <button
                key={seat.id}
                onClick={() => toggleSeatSelection(seat.id)}
                className={`w-10 h-10 rounded-md text-sm font-medium ${
                  selectedSeats.includes(seat.id)
                    ? 'bg-blue-500'
                    : seat.isAvailable
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-red-500 cursor-not-allowed'
                }`}
                disabled={!seat.isAvailable}
              >
                {seat.id}
              </button>
            ))}
          </div>
          
          <p className="mt-4 text-sm">
            Сонгосон суудал:{' '}
            <span className="font-semibold">
              {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Хоосон'}
            </span>
          </p>
        </div>
      </div>

      {/* Ticket Selection */}
      <div className="py-6 border-t border-gray-800 bg-white dark:bg-gray-900 ">
        <div className="container mx-auto">
          <h2 className="text-lg font-semibold mb-4">Тасалбар тоо сонгох</h2>
          <div className="flex-col justify-between items-center mb-4">
            <div className="flex items-center">
              <p className="text-sm">Том хүн (10,000₮)</p>
              <div className="ml-4 flex items-center space-x-2">
                <button
                  onClick={decrementAdultTickets}
                  className="w-8 h-8 bg-gray-700 text-white rounded-full"
                >
                  -
                </button>
                <span>{adultTickets}</span>
                <button
                  onClick={incrementAdultTickets}
                  className="w-8 h-8 bg-gray-700 text-white rounded-full"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-sm">Хүүхэд (8,000₮)</p>
              <div className="ml-4 flex items-center space-x-2">
                <button
                  onClick={decrementChildTickets}
                  className="w-8 h-8 bg-gray-700 text-white rounded-full"
                >
                  -
                </button>
                <span>{childTickets}</span>
                <button
                  onClick={incrementChildTickets}
                  className="w-8 h-8 bg-gray-700 text-white rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <p className="text-sm">
            Нийт төлбөр: <span className="font-semibold">{totalCost}₮</span>
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="container mx-auto text-center mt-8 pb-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg mx-2"
          onClick={handleButtonClick}
        >
          Баталгаажуулах
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg mx-2"
          onClick={clearSelection}
        >
          Цэвэрлэх
        </button>
      </div>
    </div>
  );
}
