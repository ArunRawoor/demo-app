import { useState } from "react";

export default function LocalStorage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const [storedName, setStoredName] = useState("");

  //  SET item in localStorage
  const saveName = () => {
    localStorage.setItem("username", name);
    alert("Saved to localStorage!");
  };
    const saveID = () => {
    localStorage.setItem("userID", id);
    alert("Saved to localStorage!");
  };

  //  GET item from localStorage
  const getName = () => {
    const value = localStorage.getItem("username");
  

  

    setStoredName(value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>LocalStorage Demo</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
          <input
        type="text"
        placeholder="Enter id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br /><br />

      <button onClick={saveName}>SaveNmae</button>
      <button onClick={saveID}>Save</button>

      <button onClick={getName}>Get</button>

      <h3>Stored Name: {storedName}</h3>
    </div>
  );
}