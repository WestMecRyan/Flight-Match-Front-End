import { useState, useEffect } from "react";
import { fetchWelcomeMessage } from "./api";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchWelcomeMessage().then(setMessage).catch(console.error);
  }, []);

  return (
    <>
      <h1>Flight Match</h1>
      <div>{message}</div>
    </>
  );
}

export default App;
