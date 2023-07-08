import React from "react";
import { useEffect } from "react";
import "./App.css";
const API_URL = "http://www.omdbapi.com?apikey=8bdbe751";
//API KEY 8bdbe751
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Hit");
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
