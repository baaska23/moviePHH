import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

// төлбөр төлөх хэсэг
export default function Payment() {
  const adultTicketPrice = 10000;
  const childTicketPrice = 8000;

  const location = useLocation();
  console.log("Location state:", location.state);

  const { selectedSeats, adultTickets = 0, childTickets = 0 } = location.state || {};

  const totalCost = adultTickets * adultTicketPrice + childTickets * childTicketPrice;


  // төлбөр баталгаажуулах форм
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !paymentMethod) {
      alert("Please complete all fields before proceeding.");
      return;
    }

    console.log("Submitting data:", {
      ...formData,
      paymentMethod,
      totalCost,
    });

    try {
      const response = await axios.post("http://localhost:3001/api/payment", {
        ...formData,
        paymentMethod,
        totalCost,
      });
      console.log("Payment successful:", response.data); // Log server response
      alert("Payment successful!");
    } catch (error) {
      console.error("Error processing payment:", error.response || error.message); // Log error details
      alert("Payment failed! Please try again.");
    }
  };

  // төлбөрийн мэдээлэл хэсэг
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-4">Төлбөрийн мэдээлэл</h1>
        <div className="bg-gray-600 dark:bg-gray-900 p-4 rounded-lg mb-6 shadow">
          <p className="mb-2">
            <strong>Том хүн:</strong> {adultTickets} тасалбар x {adultTicketPrice}₮
          </p>
          <p className="mb-2">
            <strong>Хүүхэд:</strong> {childTickets} тасалбар x {childTicketPrice}₮
          </p>
          <p className="text-xl font-bold">
            <strong>Нийт:</strong> {totalCost.toLocaleString()}₮
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="dark:bg-gray-900 bg-gray-600 p-6 rounded-lg max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 rounded dark:bg-gray-800 bg-gray-400 text-white"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 rounded dark:bg-gray-800 bg-gray-400 text-white"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 rounded dark:bg-gray-800 bg-gray-400 text-white"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => handlePaymentMethodChange(e.target.value)}
              className="w-full p-2 rounded bg-gray- bg-gray-600 text-white"
            >
              <option value="">Select a payment method</option>
              <option value="Khan Bank">Khan Bank</option>
              <option value="Golomt Bank">Golomt Bank</option>
              <option value="TDB">TDB</option>
              <option value="M Bank">M Bank</option>
            </select>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 w-full p-2 rounded mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}