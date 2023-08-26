import PokemonCard from "./components/PokemonCard";
import React, { useState } from 'react';


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
  
    return (

      <div>
        <button onClick={handlePreviousClick}> Previous </button>
        <button onClick={handleNextClick}>Next </button>

        <PokemonCard {...pokemonList[pokemonIndex]} />
      </div>
    );
  }
  

  export default App;


