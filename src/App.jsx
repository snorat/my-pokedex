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
        console.log("hello pokemon trainer :)");
        alert("hello pokemon trainer :)")
      },
      []
    );


    const [pokemonIndex, setPokemonIndex] = useState(0);
    
    const handleNextClick = () => {
      if (pokemonIndex < pokemonList.length - 1) {
            const nextPokemon = pokemonList[pokemonIndex + 1].name;
            setPokemonIndex(pokemonIndex + 1);
            if (nextPokemon === "pikachu") {
              alert("pika pikachu !!!");
            }
      }
    };
  
    const handlePreviousClick = () => {
      if (pokemonIndex > 0) {
            const previousPokemon = pokemonList[pokemonIndex - 1].name;
            setPokemonIndex(pokemonIndex - 1);
            if (previousPokemon === "pikachu") {
              alert("pika pikachu !!!");
        }
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


