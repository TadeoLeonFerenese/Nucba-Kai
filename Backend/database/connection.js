const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //cadena de conexion para MongoDB
    const con = await mongoose.connect(process.env.DATA_BASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB conecatado");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
