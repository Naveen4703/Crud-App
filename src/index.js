const express = require("express");
const helmet = require("helmet");
const cors = require("cors")
const Router = require("./routes/router.js");
const connectDb = require("./db/connectDB.js");
const app = express();
const port = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// security
app.use(helmet());

// cors
app.use(cors());

//
app.use("/api", Router);

connectDb().then(() => {
   try {
      app.listen(port, () => {
         console.log(`Port is running on http://127.0.0.1:${port}`);
      });
   } catch (err) {
      console.log("Unable to connect db due to : ", err);
   }
});
