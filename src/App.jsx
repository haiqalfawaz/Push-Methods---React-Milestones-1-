import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Page/LandingPage";
import SignIn from "./Page/SignIn";

const App = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<SignIn />} path="/SignIn" />
    </Routes>
  );
};

export default App;
