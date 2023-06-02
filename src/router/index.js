import React, { Component } from "react";
import Home from "../views/HomePages";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default Router;
