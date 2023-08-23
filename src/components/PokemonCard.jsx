
function PokemonCard(props) {

  return ( 
// <div>
// <h1>{pokemon.name}</h1>
// <img src={pokemon.imgSrc} />
// </div>
<div>
<figure>{props.pokemonList.imgSrc === undefined ? "???" : <img src={props.pokemonList.imgSrc} alt={props.pokemonList.name} /> }
<h1> {props.pokemonList.name} </h1>
</figure>
</div>

  );
}



export default PokemonCard;