import React from "react";
import { Routers, Router, Navigate } from "react-router-dom";

import Home from "../pages/home";
import Tours from "../pages/Tours";
import TourDatails from "../pages/TourDatails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";

const Routers = () => {
  return (
    <Router>
      <Router path="/" element={<Navigate to="/home" />} />
      <Router path="/home" element={<Home />} />
      <Router path="/tours" element={<Tours />} />
      <Router path="/tour/:id" element={<TourDatails />} />
      <Router path="/login" element={<Login />} />
      <Router path="/register" element={<Register />} />
      <Router path="/tours/search" element={<SearchResultList />} />
    </Router>
  );
};

export default Routers;
