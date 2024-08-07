import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { app } from "./app.js";
import connectDB from "./database/index.js";
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
