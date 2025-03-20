import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import EmailVerify from "@pages/EmailVerify";
import ResetPassword from "@pages/ResetPassword";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
