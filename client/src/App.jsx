import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");
  
  const getMessage = async () =>{
    try{
      const responce = await axios.get("http://localhost:7777/api/message");
      setMessage(responce.data.message);
    } catch (error) {
      console.error("Error fetching message: ", error);
    }
  };
  useEffect(() => {
    getMessage();
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
