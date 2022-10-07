import React from "react";
import { Link } from "react-router-dom";
const FilterPokemons = ({pokemon,select}) =>{
    return(
        <div className="container marginsPokemons">
    {
            pokemon.map((poke,key)=>{
            const numero= addLeadingZeros(poke.id,3);
            return <PokemonBank pokemons={poke} id={key} select={select} numero={numero}></PokemonBank>
        }
    )}
</div> )}
const PokemonBank = ({pokemons,id,select,numero}) =>{
        return (
            <div className={"pokemon-container borderPokemon border"+ pokemons.types[0]} key={id} onClick={()=> select(pokemons.name)}>
                <Link to="/pokemon">
                <div className="bodyPokemon">
                    <div className={"headerPokemon header" + pokemons.types[0]}>#{numero}</div>
                    <div className="divImagePokemon">
                        <img src={`/Sprites/Icons/${pokemons.name}.png`} alt={pokemons.name} className="imgPokemon"/>
                    </div>
                </div>
                <div className={"footerPokemon footer"+ pokemons.types[0]}>{pokemons.name}</div>
                </Link>
            </div>
        )}

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }

export {PokemonBank,FilterPokemons}