import React, { useEffect, useState } from "react";
import Recipie from "./Recipie";
import "./App.css";

function App() {
  // const APP_ID = "";
  // const API_KEY = "9cf6a7eff0a94077bf8ba44941ad3316";

  // const example =
  // "https://api.spoonacular.com/recipes/complexSearch?apiKey=9cf6a7eff0a94077bf8ba44941ad3316";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getRecipies = async () => {
      const response = await fetch(`
    https://api.spoonacular.com/recipes/complexSearch?query=${search}&diet=vegeterian&maxFat=50&number=10&apiKey=d9364f20e1844b80b789f4bad4d04f5a  `);
      const data = await response.json();
      console.log(data.results);
      setRecipies(data.results);
    };
    getRecipies();
  }, [search]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    // console.log(search);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipies.map((recipie) => (
        <Recipie recipie={recipie} key={recipie.id} />
      ))}
    </div>
  );
}

export default App;
