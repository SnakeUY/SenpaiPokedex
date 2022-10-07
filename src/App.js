import './App.css';
import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './pages/pokemon';
import Home from './pages/principal';
import { pokemonList } from './services/pokemons';
function App() {

  const [state,setState] = useState({
    pokemons:pokemonList, PokemonSelected:null
  })
  const [filteredList, setFilteredList] = useState(Object.assign([],pokemonList));
  const [OrderById,setOrderById]=useState (true)

  useEffect(()=>{
    setFilteredList(OrderById ? filteredList.sort((a,b)=>a.id-b.id) : filteredList.sort(function(a,b){
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
  }))
},[OrderById,filteredList])

  const ChangeOrder = ()=>{
    setOrderById(!OrderById)
  }
const selectedpokemon =(id) => {
  setState ({PokemonSelected: filteredList.filter((item) => { return item.name.toLowerCase().includes(id.toLowerCase())})})
};
const filterBySearch = (value) => {
  setFilteredList( state.pokemons.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  }))
};

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home
        ChangeOrder= {ChangeOrder}
        OrderById= {OrderById}
        filterBySearch= {filterBySearch}
        filteredList= {filteredList}
        selectedpokemon= {selectedpokemon}
        />}></Route>

      <Route path= "pokemon" element={<Pokemon
        Pokemon={state.PokemonSelected}
      />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
