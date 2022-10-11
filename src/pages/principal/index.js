import Navbar from '../../components/Navbar';
import { OrderByAlphabetic, OrderByValue, FilterPokemons} from '../../components/PokemonBank';
const Home =({ChangeOrder,OrderById,filterBySearch,filteredList,pokemons})=> {

return (
    <>
    <Navbar
    change={ChangeOrder}
    stateChange={OrderById}
    search={filterBySearch}
    />
    <FilterPokemons
    pokemon={filteredList}
    />
    </>
  );
}

export default Home;