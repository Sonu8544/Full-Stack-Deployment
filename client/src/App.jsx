import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const getMessage = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/message");
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Failed to load message");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <>
      <div className="text-3xl font-bold text-center mt-10 text-slate-700">
        Full Stack Project Deployment
      </div>

      <p className="text-center mt-5 text-slate-700 text-2xl">
        {loading ? "Loading..." : `Message: ${message}`}
      </p>
    </>
  );
};

export default App;
