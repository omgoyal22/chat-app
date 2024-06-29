const express=require("express");
// const dotenv=require("dotenv");
const chats=require("./data/data");
const connectDB=require("./config/db")
const bodyParser =require('body-parser')
const userRoutes=require("./routes/userRoutes");
const chatRoutes=require("./routes/chatRoutes");
// const {notFound,errorHandler}=require('./middlewares/errorMiddleware');
connectDB();
// dotenv.config();
const app=express();

app.use(express.json()); 
app.use(bodyParser.json());
const cors=require("cors");

const corsOptions={
    origin:"http://localhost:3000",
    
    optionSuccessStatus:200
}
app.use(cors(corsOptions));




app.get("/",(req,res)=>{
    res.send("Api is running sucessfully");
});
app.use('/api/user',userRoutes)
app.use('api/chat',chatRoutes)

// app.use(notFound)
// app.use(errorHandler)
const PORT=process.env.PORT||5000;

app.listen(5000,console.log(`server started on port ${PORT}`)
);
