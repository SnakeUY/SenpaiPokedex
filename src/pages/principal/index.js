import Navbar from '../../components/Navbar';
import { FilterPokemons} from '../../components/PokemonBank';
const Home =({changeOrder,orderById,filterBySearch,filteredList,pokemons})=> {

return (
    <>
    <Navbar
    change={changeOrder}
    stateChange={orderById}
    search={filterBySearch}
    />
    <FilterPokemons
    pokemon={filteredList}
    />
    </>
  );
}

export default Home;