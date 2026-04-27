import { useState } from "react";

export default function SessionStorage() {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState("");

  //  SET (sessionStorage)
  const saveName = () => {
    sessionStorage.setItem("username", name);
    alert("Saved to sessionStorage!");
  };

  //  GET (sessionStorage)
  const getName = () => {
    const value = sessionStorage.getItem("username");
    setStoredName(value);
  };

 
  const clearName = () => {
    sessionStorage.removeItem("username");
    setStoredName("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>sessionStorage Demo</h2>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <button onClick={saveName}>Save</button>
      <button onClick={getName}>Get</button>
      <button onClick={clearName}>Clear</button>

      <h3>Stored Name: {storedName}</h3>
    </div>
  );
}