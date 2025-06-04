import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function BookTrialForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await axios.post(`${API_URL}/api/trial`, formData);
      alert("Successfully booked a Trial!");
      navigate("/"); 
    } catch (err) {
      if (err.response?.data?.message) {
        setStatus(err.response.data.message);
      } else {
        console.log(err);
        setStatus("Server error.");
      }
    }
  };

  return (
    <div className="max-w-xl  mx-auto p-6 bg-gray-100 shadow-md rounded-md mt-24">
      <h2 className="text-2xl font-bold mb-4 text-center">Book a Trial</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {status && <p className="text-center mt-4">{status}</p>}
    </div>
  );
}
