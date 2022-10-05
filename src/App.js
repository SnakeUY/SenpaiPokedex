import './App.css';
import Navbar from './components/Navbar';
import {useState} from "react";
import PokemonBank from './components/PokemonBank';

function App() {
  const [state,setState] = useState({
    pokemons:[
      {id:"025",name:"Pikachu",species:"Electric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"001",name:"Bulbasaur",species:"Grass",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"007",name:"Squirtle",species:"Water",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"004",name:"Charmander",species:"Fire",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"012",name:"Butterfree",species:"Bug",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"304",name:"Aron",species:"Steel",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"132",name:"Ditto",species:"Normal",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"092",name:"Gastly",species:"Ghost",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"152",name:"Mew",species:"Psychic",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
    ], PokemonSelected:null,
  })
  const selectedpokemon =(id) => {
    setState ({...state,PokemonSelected: state.pokemons[id]})
  console.log(state.PokemonSelected)
} 



  return (
    <>
    <Navbar/>
    <PokemonBank
    pokemon={state.pokemons}
    select={selectedpokemon}
    />
    </>
  );
}

export default App;
