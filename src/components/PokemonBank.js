import React from "react";
import { Link } from "react-router-dom";
const FilterPokemons = ({pokemon,select}) =>{
    return(
        <div className="container marginsPokemons">
    {
            pokemon.map((poke)=>{
            const numero= addLeadingZeros(poke.id,3);
            return <PokemonBank pokemon={poke} select={select} numero={numero}></PokemonBank>
        }
    )}
</div> )}
const PokemonBank = ({pokemon,select,numero}) =>{
        return (
            <div className={"pokemonContainer borderPokemon border"+ pokemon.types[0]} key={pokemon.id} onClick={()=> select(pokemon.id)}>
                <Link to={`/${pokemon.id}`}>
                <div className="bodyPokemon">
                    <div className={"headerPokemon header" + pokemon.types[0]}>#{numero}</div>
                    <div className="divImagePokemon">
                        <img src={`/Sprites/Icons/${pokemon.name}.png`} alt={pokemon.name} className="imgPokemon"/>
                    </div>
                </div>
                <div className={"footerPokemon footer"+ pokemon.types[0]}>{pokemon.name}</div>
                </Link>
            </div>
        )}

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }

export {PokemonBank,FilterPokemons}