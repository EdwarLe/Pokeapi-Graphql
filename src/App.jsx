
import { useDispatch, useSelector } from 'react-redux'
import useFetchPokemon from './hooks/useFetchPokemon'
import HomePage from './pages/HomePage'
import PokemonDetailsPage from './pages/PokemonDetailsPage'
import './styles/index.css'
import './styles/homePage.css'
import pokeball from "./assets/pokeball.png"
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { setPokemonList } from './redux/pokemonSlice'

function App() {
  const dispatch = useDispatch()
  const { loading, error, data } = useFetchPokemon()
    const pokemonList = useSelector(state => state.pokemon.pokemonList)

    useEffect(() => {
        if(data) {
            console.log('Data from API: ', data.pokemon_v2_pokemonspecies)
        dispatch(setPokemonList(data.pokemon_v2_pokemonspecies))
        }
    }, [data, dispatch])

    if(loading) {
        return (
        <div className='loading-screen'>
          <div className='pokeball-img-screen'>
            <img src={pokeball} alt="pokeball" />
          </div>
          <p>...Loading</p>
        </div>
    )}

    if(error) {
      return (
        <div className='error-screen'>
            <div className='pokeball-img-screen'>
                <img src={pokeball} alt="pokeball" />
            </div>
            <p>Ops! something went wrong.</p>
            <p>Please reload the page.</p>
        </div>
    )}

    console.log(pokemonList)


  return (
    <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/pokemon/:id' element={<PokemonDetailsPage />}/>
    </Routes>
  )
}

export default App
