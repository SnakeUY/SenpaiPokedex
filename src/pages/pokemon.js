import React from "react";
const Pokemon =({Pokemon}) => {
    return(
        <>
        <div className="pokemonContainer">
            <div className={"backgroundPokemon footer" + Pokemon[0].types[0]} > 
                <div className="divHeaderPokemon">
                    <div className="headerPokemon">
                        <div className="nameAndArrow">
                            <img src="/Sprites/Icons/Arrow.svg" alt="arrow" className="pokemonArrow"/>
                            <span className="pokemonName">{Pokemon[0].name}</span>
                        </div>
                        <div className="idPokemons">#{addLeadingZeros(Pokemon[0].id,3)}</div>
                    </div>
                    <div className="divButtons"></div>

                </div>
                <div className="bodyPokemons"></div>
            </div>
        </div>
         </>
    )
}
function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }
export default Pokemon