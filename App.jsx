import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/get-info", {
        businessName,
        location,
      });
      setInfo(res.data);
      setError("");
    } catch (err) {
      setInfo(null);
      setError("Business not found. Please check details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Mini Local Business Dashboard</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {info && (
          <div className="p-4 bg-gray-50 border rounded-lg space-y-2 text-center">
            <p><strong>Rating:</strong> {info.rating}</p>
            <p><strong>Reviews:</strong> {info.reviews}</p>
            <p><strong>Headline:</strong> {info.headline}</p>
          </div>
        )}

        {error && (
          <p className="text-center text-red-600 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
}

export default App;
