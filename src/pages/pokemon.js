import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

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
                <div className="bodyPokemons">
                    atack<ProgressBar completed={Pokemon[0].ATK} maxCompleted={200} completedClassName="barCompleted" isLabelVisible="false"/>

                </div>
            </div>
        </div>
         </>
    )
}
function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }
export default Pokemon