import Navbar from '../../components/Navbar';
import { OrderByAlphabetic, OrderByValue, FilterPokemons} from '../../components/PokemonBank';
const Home =({ChangeOrder,OrderById,filterBySearch,filteredList,selectedpokemon,pokemons})=> {

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
    pokemon={pokemons}
    select={selectedpokemon}
    />
    :
    <OrderByValue 
    pokemon={pokemons}
    select={selectedpokemon}
    />
    }




    
    </>
  );
}

export default Home;