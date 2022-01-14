const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const uri =
"mongodb+srv://root:root@cluster0.qqe27.mongodb.net/?retryWrites=true&w=majority"



app.listen(3001,function(){
    console.log("express is running");
}) 