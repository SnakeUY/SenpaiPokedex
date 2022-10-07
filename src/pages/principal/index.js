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
    <FilterPokemons
    pokemon={filteredList}
    select={selectedpokemon}
    />
    </>
  );
}

export default Home;