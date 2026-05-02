import Navbar from "./components/Navbar";
import Events from "./components/Events";
import "./App.css";
import { useState, useEffect } from "react";
import SignupForm from "./components/SignupForm";

function App() {
  useState(() => {});
  return (
    <>
      <Navbar />
      <Events />
      <SignupForm />
    </>
  );
}

export default App;
