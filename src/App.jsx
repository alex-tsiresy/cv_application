import { useState } from "react";

import "./App.css";

import OutputArea from "./components/OutputArea.jsx";
import InputArea from "./components/InputArea.jsx";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    degree: "",
    university: "",
    educationStart: "",
    educationEnd: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    title: "",
    company: "",
    experienceStart: "",
    experienceEnd: "",
    description: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  return (
    <>
      <div id="main-container">
        <InputArea formData={formData} handleChange={handleChange} />
        <OutputArea formData={formData} handleChange={handleChange} />
      </div>
    </>
  );
}

export default App;
