import './App.css';
import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './pages/pokemon';
import Home from './pages/principal';
import { pokemonList } from './services/pokemons';
function App() {

  const [state,setState] = useState({
    pokemons:pokemonList
  })
  const [filteredList, setFilteredList] = useState(Object.assign([],pokemonList));
  const [orderById,setOrderById]=useState (true)

  useEffect(()=>{
    setFilteredList(orderById ? filteredList.sort((a,b)=>a.id-b.id) : filteredList.sort(function(a,b){
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
  }))
},[orderById,filteredList])

  const changeOrder = ()=>{
    setOrderById(!orderById)
  }


const filterBySearch = (value) => {
  setFilteredList( state.pokemons.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  }))
};

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home
        changeOrder= {changeOrder}
        orderById= {orderById}
        filterBySearch= {filterBySearch}
        filteredList= {filteredList}
        />}></Route>

      <Route path= "/:id" element={<Pokemon
      pokemons={filteredList}
      />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
