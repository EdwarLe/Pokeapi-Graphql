import Input from "../components/atoms/Input"
import PokemonList from "../components/molecules/PokemonList"
import pokeball from "../assets/pokeball.png"
import Filter from '../components/atoms/Filter'
import '../styles/homePage.css'
import { useSelector } from 'react-redux'

const HomePage = () => {

    const pokemonList = useSelector(state => state.pokemon.pokemonList)


    console.log(pokemonList)

    return (
        <section className='app'>
            <div className='home-page'>
                <header>
                    <div className='nav-title'>
                        <div className='pokeball-img'>
                            <img src={pokeball} alt='pokeball'/>
                        </div>
                        <h1>Pokédex</h1>
                    </div>
                    <div className='input-filter-container'>
                        <Input />
                        <Filter />
                    </div>
                </header>
                <PokemonList pokemons={pokemonList}/>
            </div>
        </section>
        
    )
}


export default HomePage