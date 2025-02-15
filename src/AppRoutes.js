import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./app/main/pages/authentication/Login/Login";
import SignUp from "./app/main/pages/authentication/SignUp/SignUp";
import WelcomePage from "./app/main/pages/authentication/SignUp/SetupAccount/WelcomePage";
import Recover from "./app/main/pages/authentication/Recover/Recover";
import Reset from "./app/main/pages/authentication/Reset/Reset";
import Submit from "./app/main/pages/authentication/Submit/Submit";
import OTPVerification from "./app/main/pages/authentication/OTP Verification/OTPVerification";
import Dashboard from "./app/main/components/dashboard/Dashboard";
import SideBar from "./app/main/components/navigation/SideBar";
import Employees from "./app/main/components/employees/Employees";
import Queue from "./app/main/components/employees/employeeList/Queue";
import UnderProcess from "./app/main/components/employees/employeeList/UnderProcess";
import UserPage from "./app/main/components/user/UserPage";
import Tabs from "./app/main/components/setting/Tab/Tabs";
import Authority from "./app/main/components/setting/Authority/Authority";
import Facility from "./app/main/components/facility/Facility";
import FacilityDetail from "./app/main/components/facility/FacilityDetail";
import PartialBill from "./app/main/components/facility/PartialBill";
import MemberInformation from "./app/main/components/facility/MemberInformation";
import MemberDetail from "./app/main/components/facility/MemberDetail";

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
        <Route element={<SideBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/underprocess" element={<UnderProcess />} />
          <Route path="/userPage" element={<UserPage />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/authority" element={<Authority />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/facilitydetail" element={<FacilityDetail />} />
          <Route path="/partialbill" element={<PartialBill />} />
          <Route path="/memberInformation" element={<MemberInformation />} />
          <Route path="/memberdetail" element={<MemberDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
