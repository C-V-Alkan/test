import React from "react";
import axios from "axios";

function App() {
  const getJSON = async (value: string) => {
    const { data } = await axios.get("/get-gifs", {
      params: { keyword: value },
    });
    console.log(data);
  };

  return (
    <>
      <input
        onChange={(e) => getJSON(e.target.value)}
        placeholder="input keyword"
        type="text"
      />
    </>
  );
}

export default App;
