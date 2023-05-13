import React from "react";
import { Routes, Route } from "react-router-dom";
import Tracker from "../Pages/Tracker";
import Pricing from "../Pages/Pricing";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" />
      <Route path="/signup" />
      <Route path="/nutrients" />
      <Route />
    </Routes>
  );
};

export default MainRouter;
