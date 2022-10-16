import React, { useState } from "react";

// min="0" for age type="number"
const PersonForm = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#000" : "#FFF",
        color: "gray",
      }}
    >
      <h4>Person Form</h4>
      <div>
        <p>Age</p>
        <input
          type="number"
          value={age}
          min="0"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />

        <p>Name</p>
        <input
          type="type"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>Dark Mode:</p>
        <input
          type="checkbox"
          value={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default PersonForm;
