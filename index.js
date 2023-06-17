const express = require('express');

//rest object
const app = express();

 //PORT
const port = 3010;

const path = require('path');
import connectDB from "./config/db.js";

//configure env
dotenv.config();

//databse config
connectDB();

app.use(express.static('static'));
//rest api
app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});
//run listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
