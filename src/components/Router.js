import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Pofile";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
  <Router>
    {isLoggedIn && <Navigation />}
    <Routes> 
      {isLoggedIn ? (
      <>
        <Route path="/" element={<Home userObj={userObj} />} >
        </Route> 
        <Route path="/profile" element={<Profile/>} >
        </Route> 
        <Route path="*" element={<Navigate to="/" />} />
      </>
      ) : ( 
        <>
          <Route path="/" element={<Auth/>}>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  </Router>
  )
}

export default AppRouter;
