import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./app/main/pages/authentication/Login/Login";
import SignUp from "./app/main/pages/authentication/SignUp/SignUp";
import WelcomePage from "./app/main/pages/authentication/SignUp/SetupAccount/WelcomePage";
import Recover from "./app/main/pages/authentication/Recover/Recover";
import Reset from "./app/main/pages/authentication/Reset/Reset";
import Submit from "./app/main/pages/authentication/Submit/Submit";
import OTPVerification from "./app/main/pages/authentication/OTP Verification/OTPVerification";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/setupaccount" element={<WelcomePage />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
