import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import getHexType from "../services/typesFun";
const Pokemon =({Pokemon}) => {

    let colorPrincipal = getHexType(Pokemon[0].types[0])
    let colorSecundario
    if (Pokemon[0].types[1]){
        colorSecundario = getHexType(Pokemon[0].types[1])
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
                            <span className="pokemonName">{Pokemon[0].name}</span>
                        </div>
                        </Link>
                        <div className="idPokemons">#{addLeadingZeros(Pokemon[0].id,3)}</div>
                    </div>
                    <div className="divButtons">
                        <div className="leftDot">{'<'}</div>
                        <div className="rightDot">{'>'}</div>
                    </div>
                    <img alt="pokeball" src="/Sprites/Icons/Pokeball.png" className="pokeballBackground"/>
                </div>
                
                <img alt="a" src={"/Sprites/Icons/" + Pokemon[0].name.toLowerCase() + ".png"} className="imgPokemonBig" />
                
                <div className="bodyPokemons">
                    
                    <div className="typesPokemon">
                    {(!Pokemon[0].types[1])?
                        <>
                            <p className={"buttonPokemon"} style={{backgroundColor: colorPrincipal}}>{Pokemon[0].types[0]}</p>
                        </>
                    :
                        <>
                            <p className={"buttonPokemon"} style={{backgroundColor: colorPrincipal}}>{Pokemon[0].types[0]}</p>
                            <p className={"buttonPokemon"} style={{backgroundColor: colorSecundario}}>{Pokemon[0].types[1]}</p>
                        </>
                    }
                        </div>
                    <div className="aboutPokemon">
                        <div className={"titleAbout header"+ Pokemon[0].types[0]}>About</div>
                        <div className="weightAbout">
                            <div className="infoAboutStat">
                                <img alt="Weight" src="/Sprites/Icons/Weight.svg" height={"20px"}/> <p>{Pokemon[0].weight} kg </p>
                            </div>
                            <p className="titleAboutStats">Weight</p>
                        </div>
                        
                        <div className="heightAbout">
                            <div className="infoAboutStat">
                                <img alt="Height" src="/Sprites/Icons/Height.svg" height={"20px"}/> <p>{Pokemon[0].height} m </p>
                            </div>
                            <p className="titleAboutStats">Weight</p>
                        </div>
                        <div className="movesAbout">{Pokemon[0].moves[0]}<br/>{Pokemon[0].moves[1]}<br/><p className="titleAboutStats">Moves</p></div>
                        <div className="descriptionAbout">{Pokemon[0].description}</div>
                    </div>
                    
                    <div className="baseStats">
                        <p className={"baseStatslbl header"+ Pokemon[0].types[0]}>Base Stats</p>
                        <div className={"divLabelStat header"+ Pokemon[0].types[0]}>
                            <p className="labelStat">HP</p><p className="labelStat">ATK</p><p className="labelStat">DEF</p><p className="labelStat">SATK</p><p className="labelStat">SDEF</p><p className="labelStat">SPD</p>
                        </div>
                        <div className="hrMid">
                            <hr/>
                        </div>
                        <div className={"divLabelStatPokemon"}>
                            <p className="labelStat">{Pokemon[0].HP}</p><p className="labelStat">{Pokemon[0].ATK}</p><p className="labelStat">{Pokemon[0].DEF}</p><p className="labelStat">{Pokemon[0].SATK}</p><p className="labelStat">{Pokemon[0].SDEF}</p><p className="labelStat">{Pokemon[0].SPD}</p>
                        </div>
                        <div className="divProgressBar">
                        <p className="labelStat"><ProgressBar completed={Pokemon[0].HP}maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barlabel"/></p>
                        <p className="labelStat"><ProgressBar completed={Pokemon[0].ATK} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barlabel"/></p>
                        <p className="labelStat"><ProgressBar completed={Pokemon[0].DEF} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barlabel"/></p>
                        <p className="labelStat"><ProgressBar completed={Pokemon[0].SATK} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barlabel"/></p>
                        <p className="labelStat"><ProgressBar completed={Pokemon[0].SDEF} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barlabel"/></p>
                        <p className="labelStat"><ProgressBar completed={Pokemon[0].SPD} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barlabel"/></p>
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