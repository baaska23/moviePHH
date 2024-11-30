import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SelectSeat() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieTitle, timing } = location.state || {};
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);

  const seats = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    isAvailable: Math.random() > 0.3,
  }));

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
    if (window.confirm("Are you sure you want to clear all selections?")) {
      setSelectedSeats([]);
      setAdultTickets(0);
      setChildTickets(0);
    }
  };

  const adultTicketPrice = 10000;
  const childTicketPrice = 8000;
  const totalCost =
    adultTickets * adultTicketPrice + childTickets * childTicketPrice;

  const handleConfirm = () => {
    if (selectedSeats.length > 0 && (adultTickets + childTickets > 0)) {
      alert(
        `Таны сонголт:\nСуудал: ${selectedSeats.join(
          ", "
        )}\nТасалбар: ${adultTickets + childTickets}\nНийт төлбөр: ${totalCost}₮`
      );
    }
  };
  const handleButtonClick = () => {
    if (selectedSeats.length < adultTickets + childTickets) {
      alert("Please select enough seats for all tickets.");
    } else {
      navigate("/payment", { state: { selectedSeats, adultTickets, childTickets } });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Movie Information */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto flex items-center space-x-6">
          <img
            src="/src/assets/movie/dunkirk.jpg"
            alt="Movie Poster"
            className="w-36 h-52 rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-bold">{movieTitle || "Movie Title"}</h1>
            <p className="text-gray-400">Өргөө 3: Шангри-Ла төв | IMAX 3D</p>
            <p className="text-gray-400">
              {timing || "Timing Unavailable"} | Танхим-1
            </p>
          </div>
        </div>
      </div>

      {/* Seat Selection */}
      <div className="py-6">
        <div className="container mx-auto">
          <h2 className="text-lg font-semibold mb-4">Та суудлаа сонгоно уу?</h2>
          <div className="grid grid-cols-10 gap-2 justify-center">
            {seats.map((seat) => (
              <button
                key={seat.id}
                onClick={() => toggleSeatSelection(seat.id)}
                className={`w-10 h-10 rounded-md text-sm font-medium ${
                  selectedSeats.includes(seat.id)
                    ? "bg-blue-500"
                    : seat.isAvailable
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-red-500 cursor-not-allowed"
                }`}
                disabled={!seat.isAvailable}
              >
                {seat.id}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm">
            Сонгосон суудал:{" "}
            <span className="font-semibold">
              {selectedSeats.length > 0 ? selectedSeats.join(", ") : "Хоосон"}
            </span>
          </p>

          {/* Legend */}
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-gray-700 rounded"></span>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-500 rounded"></span>
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-red-500 rounded"></span>
              <span>Unavailable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Selection */}
      <div className="py-6 border-t border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-lg font-semibold mb-4">Тасалбар тоо сонгох</h2>
          <div className="flex justify-between items-center mb-4">
            {/* Adult Ticket */}
            <div className="flex items-center">
              <p className="text-sm">Том хүн (10,000₮)</p>
              <div className="ml-4 flex items-center space-x-2">
                <button
                  onClick={decrementAdultTickets}
                  className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center"
                >
                  -
                </button>
                <span>{adultTickets}</span>
                <button
                  onClick={incrementAdultTickets}
                  className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
            {/* Child Ticket */}
            <div className="flex items-center">
              <p className="text-sm">Хүүхэд (8,000₮)</p>
              <div className="ml-4 flex items-center space-x-2">
                <button
                  onClick={decrementChildTickets}
                  className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center"
                >
                  -
                </button>
                <span>{childTickets}</span>
                <button
                  onClick={incrementChildTickets}
                  className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center"
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
      <div className="container mx-auto text-center mt-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg mx-2"
          onClick={handleButtonClick}>
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
