import React, { useState } from "react";

export default function Payment({ adultTickets, childTickets }) {
  const adultTicketPrice = 10000;
  const childTicketPrice = 8000;

  const totalCost = adultTickets * adultTicketPrice + childTickets * childTicketPrice;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !paymentMethod) {
      alert("Please complete all fields before proceeding.");
      return;
    }
    alert("Payment successful!");
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Payment Summary */}
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-4">Төлбөрийн мэдээлэл</h1>
        <div className="bg-gray-900 p-4 rounded-lg">
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

      {/* Payer Info Form */}
      <div className="container mx-auto py-6">
        <h2 className="text-xl font-semibold mb-4">Хувийн мэдээлэл</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="name" className="block mb-2">
              Нэр:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700"
              placeholder="Таны нэр"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              И-мэйл:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2">
              Утасны дугаар:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700"
              placeholder="99000000"
              required
            />
          </div>
        </form>
      </div>

      {/* Payment Method */}
      <div className="container mx-auto py-6">
        <h2 className="text-xl font-semibold mb-4">Төлбөрийн арга</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => handlePaymentMethodChange("Khan Bank")}
            className={`p-4 rounded-lg text-center ${
              paymentMethod === "Khan Bank"
                ? "bg-blue-600"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Khan Bank
          </button>
          <button
            onClick={() => handlePaymentMethodChange("Golomt Bank")}
            className={`p-4 rounded-lg text-center ${
              paymentMethod === "Golomt Bank"
                ? "bg-blue-600"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Golomt Bank
          </button>
          <button
            onClick={() => handlePaymentMethodChange("TDB")}
            className={`p-4 rounded-lg text-center ${
              paymentMethod === "TDB"
                ? "bg-blue-600"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            TDB
          </button>
          <button
            onClick={() => handlePaymentMethodChange("Xac Bank")}
            className={`p-4 rounded-lg text-center ${
              paymentMethod === "Xac Bank"
                ? "bg-blue-600"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Xac Bank
          </button>
          
        </div>
      </div>

      {/* Confirm Button */}
      <div className="container mx-auto text-center mt-8">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
        >
          Баталгаажуулах
        </button>
      </div>
    </div>
  );
}
