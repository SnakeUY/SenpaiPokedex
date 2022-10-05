import React from "react";

const PokemonBank = ({pokemon,select}) =>{
 return(
    <div className="container margins">
    {
        pokemon.map((poke,key)=>{
        return (
            <div className={"pokemon-container borderPokemon border"+ poke.species} key={key} onClick={()=> select(key)}>
                <div className="bodyPokemon">
                    <div className={"headerPokemon header" + poke.species}>#{poke.id}</div>
                    <div className="divImagePokemon">
                        <img src={`/Sprites/Icons/${poke.name}.png`} alt={poke.name} className="imgPokemon"/>
                    </div>
                </div>
                <div className={"footerPokemon footer"+ poke.species}>{poke.name}</div>
            </div>
        )}
    )}
    </div>
 )   
}
export default PokemonBank