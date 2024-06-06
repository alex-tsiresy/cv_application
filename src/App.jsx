// import { useState } from "react";

import "./App.css";

import OutputArea from "./components/OutputArea.jsx";
import InputArea from "./components/InputArea.jsx";

function App() {
  return (
    <>
      <div id="main-container">
        <InputArea />
        <OutputArea />
      </div>
    </>
  );
}

export default App;
