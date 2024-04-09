
const express = require("express");
const app = express();
const mongoose=require("mongoose");

const userRoutes = require("./routes/User");

// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payments");
// const courseRoutes = require("./routes/Course");
// const contactUsRoute = require("./routes/Contact");

const dbConnect = require("./config/connect");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;

//database connect
dbConnect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);



//routes
app.use("/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);
 

//def route
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(5000, () => {
	console.log(`App is running at ${PORT}`)
})


const seedselingroute=require("./routes/seedseling")

app.use("/seed/selling",seedselingroute)
dbConnect();


const createalldataroutes=require("./routes/alldatass")
app.use("/route/data",createalldataroutes);

const getingdata=require('./routes/alldatass');

app.use("/route/getdata",getingdata);


