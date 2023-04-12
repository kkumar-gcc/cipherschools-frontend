import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import NotFound from "./NotFound";
import PublicRoute from "./PublicRoute";
import RequireAuth from "./RequireAuth";
import Profile from "./components/profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Follower from "./components/profile/Follower";

function Router() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <main className="flex-1 w-full mt-2 text-gray-700  sm:mt-6 md:mt-8  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/followers"
              element={
                <RequireAuth>
                  <Follower />
                </RequireAuth>
              }
            />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
             
            <Route path="/404" element={<NotFound />} />
            <Route path="*" exact={true} element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default Router;
