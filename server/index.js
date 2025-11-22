import express from "express";
import cors from "cors";

const app = express(); 

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.get("/api/message", (req, res) => {
  res.send({ message: "Hello from server..." });
});


app.listen(7777, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server is running on port http://localhost:7777`);
});