import express from "express";
import svpRoutes from "./routes/svp.routes.js"
import connectDB from "./lib/db.js";

const app = express();
const PORT = 3000;

//Connect DB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello students!" });
});

// CRUD functionality of School-Vaccination-portal
app.use('/school-vaccination-portal',svpRoutes)

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});