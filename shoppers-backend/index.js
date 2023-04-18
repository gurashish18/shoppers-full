/** @format */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51LNs61SAr4qzbcBddAmWJCNoDEzJwsGilvnsjGxARgla57LRNlVgw0I4bz2vXBLr4Kv3ypHJ8o3o185JJOZMCAqX00vc0FF9lY"
);

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("DB Connection Successfull!"))
	.catch((err) => {
		console.log(err);
	});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 8000, () => {
	console.log("Backend server is running!");
});
