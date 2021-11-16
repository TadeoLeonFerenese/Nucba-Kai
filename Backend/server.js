const dotenv = require("dotenv");
dotenv.config({ path: "./mongoDb.env" });
const app = require("./app");
const connectDB = require("./database/connection");

//DB Ejecuta el archivo CONNECTION
connectDB();

//START SERVER

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http:${PORT}`);
});
