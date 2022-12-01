// Node Module
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Pages
import {
  LandingPage,
  SignUp,
  SignIn,
  Home,
  Modul,
  DetailModul,
  Quiz,
  DetailQuiz,
  About,
  Contact,
  Dashboard,
  ModulSaya,
  Profil,
  Katasandi,
  Event,
  EventFavorite,
  Unauthorized,
  NotFound,
} from "./../Pages";

import PrivateRoutes from "./PrivateRoute";

const AppRouter = () => {
  const isLogin = localStorage.getItem("token");
  return (
    <Routes>
      {isLogin ? (
        <Route path="/" element={<Home />} />
      ) : (
        <>
          <Route path="/" element={<LandingPage />} />
        </>
      )}
      <Route element={<PrivateRoutes />}>
        <Route path="/modul">
          <Route path="" element={<Modul />} />
          <Route path="detail-modul/:id" element={<DetailModul />} />
        </Route>
        <Route path="/quiz">
          {/* <Route path="" element={<Quiz />} /> */}
          <Route path="test/:id" element={<DetailQuiz />} />
        </Route>
        <Route path="/dashboard">
          <Route path="" element={<Dashboard />} />
          <Route path="modul-saya" element={<ModulSaya />} />
          <Route path="event-favorite" element={<EventFavorite />} />
        </Route>
        <Route path="/profil">
          <Route path="" element={<Profil />} />
          <Route path="katasandi" element={<Katasandi />} />
        </Route>
        <Route path="/event" element={<Event />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="not-found" />} />
    </Routes>
  );
};

export default AppRouter;
