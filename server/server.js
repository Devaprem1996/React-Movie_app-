// require packages
const express = require('express');
const cors = require('cors');
const bodyParser =  require ('body-parser');
const mongoose = require('mongoose');
//uses
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Mongoose connect to database 
const CONNECTION_URL = "mongodb+srv://devaprem:Dev%40sep10@cluster0.c9eepgg.mongodb.net/movDB";
mongoose.connect(CONNECTION_URL);

// routes
app.use("/", require("./Routes/posts"));



// server connect
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
    


