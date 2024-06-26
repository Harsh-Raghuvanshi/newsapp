import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Trendingnews from "./Components/Trendingnews";
import AddNews from "./Components/AddNews";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/news" element={<Trendingnews />}></Route>
        <Route path="/addnews" element={<AddNews />}></Route>
      </Routes>
    </>
  );
}
