import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import AppRouter from "./Routes/AppRoute";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/sign-in" &&
        location.pathname !== "/sign-up" &&
        location.pathname !== "/unauthorized" &&
        location.pathname !== "/not-found" && (
          <Navbar show={show} setShow={setShow} />
        )}
      <AppRouter />
      {location.pathname !== "/sign-in" &&
        location.pathname !== "/sign-up" &&
        location.pathname !== "/unauthorized" &&
        location.pathname !== "/not-found" && (
          <Footer show={show} setShow={setShow} />
        )}
    </>
  );
}

export default App;
