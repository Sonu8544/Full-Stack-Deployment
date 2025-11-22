import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/message", (req, res) => {
  res.send({ message: "Hello from server..." });
});


const PORT = 7777;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server is running on port http://localhost:${PORT}`);
});