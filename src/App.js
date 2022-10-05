import './App.css';
import Navbar from './components/Navbar';
import {useState} from "react";
import PokemonBank from './components/PokemonBank';

function App() {
  const [state,setState] = useState({
    pokemons:[
      {id:"1",name:"Pikachu",species:"Eletric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"2",name:"Bulbasaur",species:"Eletric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"3",name:"Squirtle",species:"Eletric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"4",name:"Pikachu",species:"Eletric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"5",name:"Pikachu",species:"Eletric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"6",name:"Pikachu",species:"Eletric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"7",name:"Pikachu",species:"Eletric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"8",name:"Pikachu",species:"Eletric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:"9",name:"Pikachu",species:"Eletric",weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
    ],
  })



  return (
    <>
    <Navbar/>
    <PokemonBank
    pokemon={state.pokemons}
    />
    </>
  );
}

export default App;
