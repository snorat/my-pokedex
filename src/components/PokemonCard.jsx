import { PropTypes } from "prop-types";


function PokemonCard ({ name, imgSrc }) {

  return ( 
// <div>
// <h1>{pokemon.name}</h1>
// <img src={pokemon.imgSrc} />
// </div>

  <>
  <img src={imgSrc} alt={name} />
  <h1>{name}</h1>
  </>
 
  )
}
  PokemonCard.propTypes = {
    pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  
    })} .isRequired

export default PokemonCard;