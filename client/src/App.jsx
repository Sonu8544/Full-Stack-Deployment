import React, { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:7777/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <>
      <div className="text-3xl font-bold text-center mt-10 text-slate-700">
        Full Stack Project Deplloyment
      </div>
      <p className="text-center mt-5 text-slate-700 text-2xl">
        Message: {message}
      </p>
    </>
  );
};

export default App;
