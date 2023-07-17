const express = require("express");
const helmet = require("helmet");
const cors = require("cors")
const Router = require("./routes/router.js");
const connectDb = require("./db/connectDB.js");
const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// security
app.use(helmet());

// cors
app.use(cors());

// Api calls
app.use("/api", Router);

// Server will be started only if database is connected 
connectDb().then(() => {
   try {
      app.listen(port, () => {
         console.log(`Port is running on http://127.0.0.1:${port}`);
      });
   } catch (err) {
      console.log("Unable to connect db due to : ", err);
   }
});
