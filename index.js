const express = require('express');
const mongoose = require('mongoose');
const app = express()
const dotenv = require('dotenv');
dotenv.config();
//const userRoute = require('./routes/user');
const authRoute = require('./routes/auth')

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log
("connected")} )
.catch(()=>{console.log("error")
}
)


app.use(express.json());
app.use("/api/auth/", authRoute);



app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening on port ${process.env.PORT || 5000}!`)});