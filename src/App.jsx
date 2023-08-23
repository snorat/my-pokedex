import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const pokemon = pokemonList[0]
  return (
    <div>
     < PokemonCard pokemonList={pokemon} />
    </div>
  );
}

export default App;