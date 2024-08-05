import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database/index.js";
dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
