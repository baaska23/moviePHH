import React, { useState } from "react";

export default function signup({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock validation (you'd replace this with an API call)
    if (password !== confirmPassword) {
      setMessage("Нууц үг таарахгүй байна.");
      return;
    }

    // Mock successful registration
    setMessage("Амжилттай бүртгэгдлээ!");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div className="flex w-11/12 max-w-lg bg-white rounded-lg overflow-hidden shadow-lg relative">
      <div className="w-full p-8">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-400 hover:text-black text-2xl">
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6">Бүртгүүлэх</h2>
        {message && (
          <p className={`mb-4 text-sm ${message.includes("Амжилттай") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-100 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-100 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 bg-gray-100 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Бүртгүүлэх
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}
