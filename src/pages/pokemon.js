import React from "react";
const Pokemon =({Pokemon}) => {
    return(
        <>
        <div className="pokemonContainer">
            <div className={"backgroundPokemon footer" + Pokemon.type[0]} > 
                <div className="divHeaderPokemon">
                    <div className="headerPokemon">
                        <div className="nameAndArrow">
                            <img src="/Sprites/Icons/Arrow.svg" alt="arrow" className="pokemonArrow"/>
                            <span className="pokemonName">{Pokemon.name}</span>

                        </div>
                        <div className="idPokemons">#{addLeadingZeros(Pokemon.id,3)}</div>
                    </div>
                    <div className="divButtons"></div>
                </div>
                <div className="bodyPokemon"></div>
            </div>
        </div>
         </>
    )
}
function addLeadingZeros(num, totalLength) {
    if (num < 0) {
      const withoutMinus = String(num).slice(1);
      return '-' + withoutMinus.padStart(totalLength, '0');
    }
  
    return String(num).padStart(totalLength, '0');
  }
export default Pokemon