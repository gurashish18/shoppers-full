/** @format */

import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Orders from "./pages/Orders";

const App = () => {
	const user = false
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:category" element={<ProductList />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
				<Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/success" element={<Success />} />
				<Route path="/orders/:userId" element={<Orders />} />
			</Routes>
		</>
	);
};

export default App;
