// Node Module
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import { LandingPage, SignUp, SignIn, Home, Modul } from "./../Pages";

const AppRouter = () => {
  const isLogin = localStorage.getItem("user");
  return (
    <Routes>
      {isLogin ? (
        <Route path="/" element={<Home />} />
      ) : (
        <>
          <Route path="/" element={<LandingPage />} />
        </>
      )}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/modul" element={<Modul />} />
    </Routes>
  );
};

export default AppRouter;
