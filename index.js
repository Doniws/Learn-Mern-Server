import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"

const app = express();

// connect to mongoo db 
mongoose .connect('mongodb+srv://Doniws:TidakAda@cluster0.nuaotjj.mongodb.net/test',{
    useNewUrlParser : true ,
    useUnifiedTopology : true 
})

const db = mongoose.connection;
db.on("error" , (error) => console.log(error))
db.once('open' , ()=> console.log("Databese conected"))

app.use(cors());
app.use(express.json());
app.use(UserRoute);



// port api
app.listen(5000, ()=> console.log("server up running "));


