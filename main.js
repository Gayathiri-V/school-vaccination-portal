import express from "express";
import svpRoutes from "./routes/svp.routes"
const app = express();
const PORT = 3000;



app.get("/", (req, res) => {
  res.json({ msg: "Hello students!" });
});

// CRUD functionality of School-Vaccination-portal
app.use('/school-vaccination-portal',svp)

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});