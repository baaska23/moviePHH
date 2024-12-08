import React, { useState } from "react";

// хэрэглэгчийн бүртгэлийг зохицуулах хэсэг
export default function signup({ onClose, onLoginOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // нууц үгийг зөв зохиосон эсэхийг шалгах
    if (password !== confirmPassword) {
      setMessage("Нууц үг таарахгүй байна.");
      return;
    }

    setMessage("Амжилттай бүртгэгдлээ!");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 px-14">
      <div className="flex flex-col md:flex-row w-10/12 max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg relative">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-gray-100 p-4 md:p-10 flex flex-col justify-center items-center">
          <img
            src="src/assets/login-pic.png"
            alt="Signup Icon"
            className="h-14 md:h-24 mb-4 md:mb-6"
          />
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-gray-800">Тавтай морил!</h2>
          <p className="text-sm md:text-base text-gray-600 text-center">
            Та бүртгэлтэй бол{" "}
            <button
              onClick={() => {
                onClose(); // Close the logup modal
                onLoginOpen(); // Open the sigin modal
              }}
              className="text-blue-600 hover:underline font-semibold"
            >
              Нэвтрэх
            </button>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-black text-white p-4 md:p-10">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl md:text-2xl"
            >
              &times;
            </button>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Бүртгүүлэх</h2>
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
              <label className="block text-sm md:text-base font-medium mb-1" htmlFor="name">
                НЭР
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 bg-gray-900 text-white rounded"
              />
            </div>
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
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm md:text-base font-medium mb-1" htmlFor="password">
                НУУЦ ҮГ
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-900 text-white rounded"
              />
            </div>
            <div className="mb-4">
            <label className="block text-sm md:text-base font-medium mb-1" htmlFor="confirmPassword">
            НУУЦ ҮГ Баталгаажуулах
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 bg-gray-900 text-white rounded"
            />
          </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Бүртгүүлэх
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
