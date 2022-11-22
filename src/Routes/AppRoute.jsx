// Node Module
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import { LandingPage, SignUp } from "./../Pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default AppRouter;
