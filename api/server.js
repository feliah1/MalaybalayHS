const express = require("express")
const app = express()
const  connectDB  = require("./db/db");
const PORT = 5005;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { adminAuth, userAuth } = require("./controllers/authController");

//middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
}));
app.use(express.json())
app.use("/api/auth", require("./routes/route"))
app.use("/api/items", require("./routes/productRoute"))
app.use("/api/cart", require("./routes/userCartRoute"))
app.use("/api/order", require("./routes/orderRoute"))
app.use(cookieParser());

//route for login
app.get("/admin", adminAuth, (req, res) => res.send("/auth"));
app.get("/basic", userAuth, (req, res) => res.send("/home"));


const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
)
// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})

// Curb Cores Error by adding a header here
//this is for admin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// this is for customer
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader(
    "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

connectDB();
