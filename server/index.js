import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

// setough cors policy dev and production domains
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      //   Add your production domain here
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.get("/api/message", (req, res) => {
  res.send({ message: "Hello from server..." });
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server is running on port http://localhost:${PORT}`);
});
