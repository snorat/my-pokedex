import PokemonCard from "./components/PokemonCard";
import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import "./App.css"


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  function App() {

    useEffect(
      () => {
        console.log("hello pokemon trainer :)");
        alert("hello pokemon trainer :)")
      },
      []
    );

    const [pokemonIndex, setPokemonIndex] = useState(0);

    const handleClick = (index) => { setPokemonIndex(index);
      if (pokemonList[index].name === 'pikachu')
      {alert('pika pikachu !!!');} }
    
    return (

      <div>
        <PokemonCard {...pokemonList[pokemonIndex]} />
        <NavBar pokemonList={pokemonList} handleClick={handleClick}/>

      </div>
    );
  }


export default App;

