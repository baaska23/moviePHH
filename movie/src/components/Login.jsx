import React, { useState } from "react";

export default function Login({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockResponse = {
      email: "test@example.com",
      password: "password123",
    };

    if (email === mockResponse.email && password === mockResponse.password) {
      setMessage("Амжилттай нэвтэрлээ!");
      onLoginSuccess();
    } else {
      setMessage("Нэвтрэх мэдээлэл буруу байна.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="flex w-11/12 max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg relative">
        {/* Left Side */}
        <div className="w-1/2 bg-gray-100 p-8 flex flex-col justify-center items-center">
        <img
            src="src/assets/login-pic.png"
            alt="Camera Icon"
            className="h-24 mb-6"
          />
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Сайн уу?</h2>
          <p className="text-gray-600">
            хэрэв та бүртгэлгүй бол{" "}
            <a href="/signup" className="text-blue-600 hover:underline font-semibold">
              Бүртгүүлэх
            </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-black text-white p-8">
        <div className="flex justify-end">
            <button
              onClick={onClose} // Use onClose prop
              className="text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-6">Нэвтрэх</h2>
          {message && (
            <p
              className={`mb-4 text-sm ${
                message.includes("Амжилттай") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-gray-900 text-white rounded"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                PASSWORD
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-900 text-white rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-9"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
              Нэвтрэх
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
