import React, { useState } from "react";

export default function Login({ onClose, onLoginSuccess, onSignupOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockResponse = {
      email: "test@example.com",
      password: "password123",
    };

    if (email === mockResponse.email && password === mockResponse.password) {
      setMessage("Амжилттай нэвтэрлээ!");
      onLoginSuccess(); // Trigger login success
    } else {
      setMessage("Нэвтрэх мэдээлэл буруу байна.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 px-14 ">
      <div className="flex flex-col md:flex-row w-10/12 max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg relative">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-gray-100 p-4 md:p-10 flex flex-col justify-center items-center ">
          <img
            src="src/assets/login-pic.png" // Ensure the image is in the public/assets directory
            alt="Camera Icon"
            className="h-14 md:h-24 mb-4 md:mb-6"
          />
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-gray-800">
            Сайн уу?
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center">
            Хэрэв та бүртгэлгүй бол{" "}
            <button
              onClick={() => {
                onClose(); // Close the login modal
                onSignupOpen(); // Open the signup modal
              }}
              className="text-blue-600 hover:underline font-semibold"
            >
              Бүртгүүлэх
            </button>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-black text-white p-4 md:p-10  ">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl md:text-2xl"
            >
              &times;
            </button>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Нэвтрэх
          </h2>
          {message && (
            <p
              className={`mb-4 text-sm md:text-base ${
                message.includes("Амжилттай") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm md:text-base font-medium mb-1" htmlFor="email">
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-gray-900 text-white rounded"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-sm md:text-base font-medium mb-1"
                htmlFor="password"
              >
                PASSWORD
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-900 text-white rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Нэвтрэх
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
