import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import OurTeam from "../pages/OurTeam";
import Testimonials from "../pages/Testimonials";
import Profile from "../components/auth/Profile";

function Router() {

  const [IsLoggedIn, SetIsLoggedIn] = useState(false)

  const [user, SetUser] = useState({});

  

  return (
    <Routes>
      <Route path="/" element={<Home SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} user = {user} SetUser={SetUser}/>} />
      <Route path="/about" element={<About SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} user = {user} SetUser={SetUser}/>} />
      <Route path="/services" element={<Services SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} user = {user} SetUser={SetUser}/>} />
      <Route path="/team" element={<OurTeam SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} user = {user} SetUser={SetUser}/>} />
      <Route path="/testimonials" element={<Testimonials SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} user = {user} SetUser={SetUser}/>} />
      <Route path="/profile" element={<Profile SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} user = {user} SetUser={SetUser}/>} />
    </Routes>
  );
}

export default Router;