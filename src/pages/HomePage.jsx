import PropTypes from 'prop-types'
import Input from "../components/atoms/Input"
import PokemonList from "../components/molecules/PokemonList"
import pokeball from "../assets/pokeball.png"
import Filter from '../components/atoms/Filter'
import '../styles/homePage.css'

const HomePage = ({ pokemons }) => {
    return (
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
            <PokemonList pokemons={pokemons}/>
        </div>
    )
}

HomePage.propTypes = {
    pokemons: PropTypes.array
  }

export default HomePage