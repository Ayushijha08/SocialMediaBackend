require("dotenv").config()
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require('express')
const app = express()
// require(configDotenv)
const PORT = process.env.PORT || 8000;
// const dbConnect = require("./dbConnection");
const mongoose = require("mongoose");
// const { configDotenv } = require('dotenv');


// app.use -> you're using a middleware
app.use(express.json())  // body-parser
app.use(express.urlencoded({extended: true}))


app.get("/yo", async (req, res) => {
    // return res.send(200).json({message: "api got hit", success: true})
    return res.status(200).json({ message: "api got hit", success: true });
})

// express supports event-driven system.
// definition + usecase/history/problem-statement/solution + earlier solutions of the same problem + examples + alternative tools/ways
app.listen(PORT, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("db connected successfully!")
        console.log(`Server is running on port ${PORT}`);
    }).catch(err => {
        console.log(err)
    })
})