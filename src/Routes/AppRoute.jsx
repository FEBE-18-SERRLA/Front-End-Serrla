// Node Module
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import { LandingPage, SignUp, SignIn } from "./../Pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default AppRouter;
