import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link, useParams } from "react-router-dom";
import getHexType from "../services/typesFun";
const Pokemon =({pokemons}) => {


    let id = useParams().id
    const [pokemon, setPokemon] = useState(pokemons.find((poke) => poke.id == id))
    
    const [index,setIndex] = useState(pokemons.indexOf (pokemon)) 

    useEffect(()=>{
        setPokemon(pokemons.find((poke) => poke.id == id))
    },[id])
    useEffect(()=>{
        setIndex(pokemons.indexOf (pokemon))
    },[pokemon])

    const nextPos=index+1;
    const beforePos=index-1;

    let colorPrincipal = getHexType(pokemon.types[0])
    let colorSecundario
    if (pokemon.types[1]){
        colorSecundario = getHexType(pokemon.types[1])
    }
    
    return(
        <>
        <div className="pokemonContainer">
            <div className={"backgroundPokemon"} style={{backgroundColor: colorPrincipal}} > 
                <div className="divHeaderPokemon">
                    <div className="headerPokemon">
                        <Link to="/">
                        <div className="nameAndArrow">
                            <img src="/Sprites/Icons/Arrow.svg" alt="arrow" className="pokemonArrow"/>
                            <span className="pokemonName" style={{color:"black"}}>{pokemon.name}</span>
                        </div>
                        </Link>
                        <div className="idPokemons">#{addLeadingZeros(pokemon.id,3)}</div>
                    </div>
                    <div className="divButtons">
                        {pokemons[beforePos] &&
                        <>
                            <Link to={`/${pokemons[beforePos].id}`}>
                                <div className="leftDot" >{'<'}</div>
                            </Link>
                        </>
                        }{pokemons[nextPos] &&
                        <>
                            <Link to={`/${pokemons[nextPos].id}`}>
                                <div className="rightDot" >{'>'}</div>
                            </Link></>
                        }
                        
                        <div><><img alt="pokeball" src="/Sprites/Icons/Pokeball.png" className="pokeballBackground"/></></div>
                    </div>

                </div>
                
                <img alt="a" src={"/Sprites/Icons/" + pokemon.name.toLowerCase() + ".png"} className="imgPokemonBig" />
                
                <div className="bodyPokemons">
                    
                    <div className="typesPokemon">
                    {(!pokemon.types[1])?
                        <>
                            <p className={"buttonPokemon"} style={{backgroundColor: colorPrincipal}}>{pokemon.types[0]}</p>
                        </>
                    :
                        <>
                            <p className={"buttonPokemon"} style={{backgroundColor: colorPrincipal}}>{pokemon.types[0]}</p>
                            <p className={"buttonPokemon"} style={{backgroundColor: colorSecundario}}>{pokemon.types[1]}</p>
                        </>
                    }
                        </div>
                    <div className="aboutPokemon">
                        <div className={"titleAbout header"+ pokemon.types[0]}>About</div>
                        <div className="weightAbout">
                            <div className="infoAboutStat">
                                <img alt="Weight" src="/Sprites/Icons/Weight.svg" height={"20px"}/> <p>{pokemon.weight} kg </p>
                            </div>
                            <p className="titleAboutStats">Weight</p>
                        </div>
                        
                        <div className="heightAbout">
                            <div className="infoAboutStat">
                                <img alt="Height" src="/Sprites/Icons/Height.svg" height={"20px"}/> <p>{pokemon.height} m </p>
                            </div>
                            <p className="titleAboutStats">Weight</p>
                        </div>
                        <div className="movesAbout">{pokemon.moves[0]}<br/>{pokemon.moves[1]}<br/><p className="titleAboutStats">Moves</p></div>
                        <div className="descriptionAbout">{pokemon.description}</div>
                    </div>
                    
                    <div className="baseStats">
                        <p className={"baseStatslbl header"+ pokemon.types[0]}>Base Stats</p>
                        <div className={"divLabelStat header"+ pokemon.types[0]}>
                            <p className="labelStat">HP</p><p className="labelStat">ATK</p><p className="labelStat">DEF</p><p className="labelStat">SATK</p><p className="labelStat">SDEF</p><p className="labelStat">SPD</p>
                        </div>
                        <div className="hrMid">
                            <hr/>
                        </div>
                        <div className={"divLabelStatPokemon"}>
                            <p className="labelStat">{pokemon.HP}</p><p className="labelStat">{pokemon.ATK}</p><p className="labelStat">{pokemon.DEF}</p><p className="labelStat">{pokemon.SATK}</p><p className="labelStat">{pokemon.SDEF}</p><p className="labelStat">{pokemon.SPD}</p>
                        </div>
                        <div className="divProgressBar">
                        <p className="labelStat"><ProgressBar completed={pokemon.HP}maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.ATK} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.DEF} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.SATK} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.SDEF} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.SPD} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        </div>
                    </div>
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