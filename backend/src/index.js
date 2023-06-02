import express from "express";
import shortlinkRoutes from "./api/shortlink.js"

//const api = require('./api');
//const router = require('./router');


const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const port = process.env.PORT || 5001;

app.use("/api/v1/shortlink", shortlinkRoutes);
  
  app.listen(port, () => console.log(`server running on port: ${port}`));