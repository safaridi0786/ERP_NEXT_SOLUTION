import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./app/main/pages/authentication/Login/Login";
import SignUp from "./app/main/pages/authentication/SignUp/SignUp";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
