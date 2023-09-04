import PokemonCard from "./components/PokemonCard";
import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import { useEffect } from "react";


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
        if (pokemonList.name === "pikachu")
        console.log("hello pokemon trainer :)");
        alert("hello pokemon trainer :)")
      },
      []
    );


    const [pokemonIndex, setPokemonIndex] = useState(0);
    
  
    const handleNextClick = () => {
       if (pokemonIndex < pokemonList.length  - 1) {
          setPokemonIndex(pokemonIndex + 1);
      }
    };
  
    const handlePreviousClick = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1);
      }
    };

    // useEffect(
    //   () => {
    //       if name.PokemonCard === 
    //     console.log("pika pikachu !!!");
    //     alert("pika pikachu !!!")
    //   },
    //   []
    // );
  
    return (


      <div>
        <NavBar handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} />
        <PokemonCard {...pokemonList[pokemonIndex]} />
        {/* <NavBar actions= {{next:handleNextClick, previous:handlePreviousClick}} /> */}
      </div>
    );
  }
  

  export default App;


