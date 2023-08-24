import PokemonCard from "./components/PokemonCard";

function App() {

  const bulbasaur = 
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  };
  const mew =
  {
    name: "mew",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
  };

  return (
  <>
  <PokemonCard {...bulbasaur}/>
  <PokemonCard {...mew} />
  </>
  )
}

export default App;


