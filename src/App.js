import './App.css';
import Navbar from './components/Navbar';
import {useState} from "react";
import { OrderByAlphabetic, OrderByValue, FilterPokemons} from './components/PokemonBank';

function App() {
  const [state,setState] = useState({
    pokemons:[
      {id:25,name:"Pikachu",types:["Electric"],weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:1,name:"Bulbasaur",types:["Grass","Poison"],weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:7,name:"Squirtle",types:["Water"],weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:4,name:"Charmander",types:["Fire"],weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:12,name:"Butterfree",types:["Bug","Flying"],weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:304,name:"Aron",types:["Steel","Rock"],weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:132,name:"Ditto",types:["Normal"],weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:92,name:"Gastly",types:["Ghost","Type"],weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
      {id:152,name:"Mew",types:["Psychic"],weight:"6,0",height:"0,4",moves:["Mega-Puch","Pay-Day"],description:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",HP:"035",ATK:"055",DEF:"040",SATK:"050",SDEF:"050",SPD:"090"},
    ].sort((a,b)=>a.id-b.id), PokemonSelected:null,
  })
  const selectedpokemon =(id) => {
    setState ({...state,PokemonSelected: state.pokemons[id]})
} 
const [OrderById,setOrderById]=useState (true)
const ChangeOrder = ()=>{
  if(OrderById === true){
    setOrderById(false)
  }else{
    setOrderById(true)
  }
}
const [filteredList, setFilteredList] = new useState(state.pokemons);

const filterBySearch = (event) => {
  const query = event.target.value;
  let updatedList = [...state.pokemons];
  updatedList = updatedList.filter((item) => {
    return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  setFilteredList(updatedList);
  if(event.target.value === ""){
    updatedList = null
    setFilteredList(updatedList)
  }
};

  return (
    <>
    <Navbar
    change={ChangeOrder}
    stateChange={OrderById}
    search={filterBySearch}
    />
    {(filteredList)?
    <FilterPokemons
    pokemon={filteredList}
    select={selectedpokemon}
    />
    :
    (!OrderById)?
    <OrderByAlphabetic
    pokemon={state.pokemons}
    select={selectedpokemon}
    />
    :
    <OrderByValue 
    pokemon={state.pokemons}
    select={selectedpokemon}
    />
    }



    
    </>
  );
}

export default App;
