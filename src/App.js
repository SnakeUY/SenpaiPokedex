import './App.css';
import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './pages/pokemon';
import Home from './pages/principal';
import { pokemonList } from './services/pokemons';
function App() {
  let cantidadpokemon = 20
  const [state,setState] = useState({
    pokemons:pokemonList,
    pokemonbeta:[],
  })
  const [filteredList, setFilteredList] = useState(Object.assign([],state.pokemonbeta));
  const [orderById,setOrderById]=useState (true)

  useEffect(()=>{

    setFilteredList(Object.assign([],orderById ? state.pokemonbeta.sort((a,b)=>a.id-b.id) : state.pokemonbeta.sort(function(a,b){
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
  })))
},[orderById,state.pokemonbeta])

  const changeOrder = ()=>{
    setOrderById(!orderById)
  }


const filterBySearch = (value) => {
  setFilteredList(state.pokemonbeta.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  }))
};


useEffect(()=>{
  fetchKantoPokemon()
},[])

async function fetchKantoPokemon(){
  let aux = []
  for(let i= 1;i<=cantidadpokemon;i++){
    await fetch("https://pokeapi.co/api/v2/pokemon/"+i)
    .then(response => response.json())
    .then(function(pokeData){
      console.log(pokeData)
      aux.push(
          { 
              id: pokeData.id,  
              name: pokeData.name,
              types: pokeData.types.map((type)=>type.type.name),
              weight: (pokeData.weight/10),  
              height: (pokeData.height/10), 
              moves: pokeData.moves.slice(0,2).map((move)=>move.move.name),        
              description: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",                     
              HP: pokeData.stats[0].base_stat, ATK: pokeData.stats[1].base_stat, DEF: pokeData.stats[2].base_stat, SATK: pokeData.stats[3].base_stat, SDEF: pokeData.stats[4].base_stat, SPD: pokeData.stats[5].base_stat
          },
      )
    })
  }
    setState({...state, pokemonbeta: aux})
 }



  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home
        changeOrder= {changeOrder}
        orderById= {orderById}
        filterBySearch= {filterBySearch}
        filteredList= {filteredList}
        cantidadpokemon={cantidadpokemon}
        />}></Route>

      <Route path= "/:id" element={<Pokemon
      pokemons={state.pokemonbeta.sort((a,b)=>a.id-b.id)}
      />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
