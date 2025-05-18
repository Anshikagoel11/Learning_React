import React from "react";
import ReactDOM from "react-dom/client";
import BodySection from "./components/bodySection";
import "./style.css";
import Header from "./components/header";


function App() {
  return (
    <>
    <Header/>
      <BodySection />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
