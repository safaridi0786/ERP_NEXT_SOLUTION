import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./app/main/pages/authentication/Login/Login";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
