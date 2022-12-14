import React from "react";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import useAuthUser from "./hooks/useAuthUser.js";
import Login from "./components/Login";

export default function App() {
  const page = useWindowSize();
  const user = useAuthUser();
  if (!user) {
    return <Login />;
  }
  return (
    <div className="app" style={{ ...page }}>
      App
    </div>
  );
}
