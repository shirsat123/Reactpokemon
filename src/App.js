import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App(props) {
  const [timer, setTimer] = useState(new Date().toTimeString());

  setInterval(() => {
    setTimer(new Date().toTimeString());
  }, 1000);

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <GetPockemon timer={timer} />
    </div>
  );
}

function GetPockemon(props) {
  const [selectpokemon, setPokemon] = useState(null);
  const [pokemonData, GetPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectpokemon}`)
      .then((response) => response.json())
      .then((data) => GetPokemonData(data));
  }, [selectpokemon]);

  return (
    <div>
      <button onClick={() => setPokemon("bulbasaur ")}>bulbasaur</button>
      <br />
      <button onClick={() => setPokemon("charizard")}>charizard</button>
      <br />
      <button onClick={() => setPokemon("ditto")}>ditto</button>
      <br />
      <h1>{selectpokemon}</h1>
      <br />
      {props.timer}
      <br />
      pokemon Height:{pokemonData?.height}
      <br />
      Pokemon Order:{pokemonData?.order}
      <br />
      Pokemon Weight:{pokemonData?.weight}
    </div>
  );
}
