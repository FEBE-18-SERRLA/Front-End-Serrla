// Node Module
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import {
  LandingPage,
  SignUp,
  SignIn,
  Home,
  Modul,
  DetailModul,
  About,
  Contact,
  Dashboard,
  ModulSaya,
  Profil,
  Katasandi,
} from "./../Pages";

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
      <Route path="/modul">
        <Route path="" element={<Modul />} />
        <Route path="detail-modul/:id" element={<DetailModul />} />
      </Route>
      <Route path="/dashboard">
        <Route path="" element={<Dashboard />} />
        <Route path="modul-saya" element={<ModulSaya />} />
      </Route>
      <Route path="/profil">
        <Route path="" element={<Profil />} />
        <Route path="katasandi" element={<Katasandi />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
