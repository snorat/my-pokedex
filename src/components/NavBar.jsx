
function NavBar({pokemonList, handleClick}) {


  return (
    <div>
      {pokemonList.map((pokemon,index) => 
      ( <button key={index} onClick={() => handleClick(index)} >{pokemon.name}</button> 
      ))}
    </div>
  );
}

export default NavBar;
