import { useDispatch, useSelector } from 'react-redux'
import useFetchPokemon from './hooks/useFetchPokemon'
import HomePage from './pages/HomePage'
import './styles/index.css'
import pokeball from "./assets/pokeball.png"
import { useEffect } from 'react';
import { setPokemonList } from './redux/pokemonSlice';

function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useFetchPokemon()
  const pokemonList = useSelector(state => state.pokemon.pokemonList)
  console.log(error)

  useEffect(() => {
    if(data) {
      dispatch(setPokemonList(data.pokemon_v2_pokemonspecies))
    }
  }, [data, dispatch])


  return (
        <section className='app'>
          {
            loading
            ? 
            <div className='loading-screen'>
              <div className='pokeball-img-screen'>
                <img src={pokeball} alt="pokeball" />
              </div>
              <p>...Loading</p>
            </div>
            : error
            ? <div className='error-screen'>
            <div className='pokeball-img-screen'>
              <img src={pokeball} alt="pokeball" />
            </div>
            <p>Ops! something went wrong.</p>
            <p>Please reload the page.</p>
          </div>
          : <HomePage pokemons={pokemonList}/>
          }
        </section>
  )
}

export default App
