import React from "react";
const OrderByValue= ({pokemon,select}) =>{
    return(
        <div className="container marginsPokemons">
    {
        pokemon.sort((a,b)=>a.id-b.id).map((poke,key)=>{
            const numero= addLeadingZeros(poke.id,3);
            return <PokemonBank pokemons={poke} id={key} select={select} numero={numero}></PokemonBank>
        }

    )}
</div> )}

const OrderByAlphabetic= ({pokemon,select}) =>{
    return(
        <div className="container marginsPokemons">
    {
        pokemon.sort(function(a,b){
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        }).map((poke,key)=>{
            const numero= addLeadingZeros(poke.id,3);
            return <PokemonBank pokemons={poke} id={key} select={select} numero={numero}></PokemonBank>
        }

    )}
</div> )}



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
            <div className={"pokemon-container borderPokemon border"+ pokemons.types[0]} key={id} onClick={()=> select(id)}>
                <div className="bodyPokemon">
                    <div className={"headerPokemon header" + pokemons.types[0]}>#{numero}</div>
                    <div className="divImagePokemon">
                        <img src={`/Sprites/Icons/${pokemons.name}.png`} alt={pokemons.name} className="imgPokemon"/>
                    </div>
                </div>
                <div className={"footerPokemon footer"+ pokemons.types[0]}>{pokemons.name}</div>
            </div>
        )}

function addLeadingZeros(num, totalLength) {
    if (num < 0) {
      const withoutMinus = String(num).slice(1);
      return '-' + withoutMinus.padStart(totalLength, '0');
    }
  
    return String(num).padStart(totalLength, '0');
  }



  

export {OrderByValue,PokemonBank,OrderByAlphabetic,FilterPokemons}