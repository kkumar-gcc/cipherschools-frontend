import React from "react";
import Router from "./Router";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <div className="font-sans antialiased bg-skin-base 2xl:shadow-lg 2xl:border-x theme-orange min-h-screen flex flex-col">
        <Router />
      </div>
    </AuthContextProvider>
  );
}

export default App;
