// src/App.js
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-center mt-10 text-lg">
      Server says: <span className="font-bold text-green-600">{message}</span>
    </div>
  );
}
