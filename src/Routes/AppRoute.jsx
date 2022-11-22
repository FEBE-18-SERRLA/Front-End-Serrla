// Node Module
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import { LandingPage } from "./../Pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRouter;
