import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import pokeballOpacity from '../../assets/pokeball-opacity.png'
import backArrow from '../../assets/back-arrow.png'

const PokemonDetails = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div className="pokemon-details">
            <div className='pokeball-details'>
                <img src={pokeballOpacity} alt={pokeballOpacity} />
            </div>
            <div className='header-details'>
                <div className='name-details'>
                    <Link
                        to={'/'}
                    >
                        <div className='back-arrow-details'>
                            <img src={backArrow}/>
                        </div>
                    </Link>
                    <h2>{pokemon.name}</h2>
                </div>
                <p># {pokemon.id < 10 ? `00${pokemon.id}` : pokemon.id >= 10 && pokemon.id < 100 ? `0${pokemon.id}`: pokemon.id}</p>
            </div>
            <div className='sprites-types-details'>
                <div className='sprite-details'>
                    <img src={pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites.front_default} alt={pokemon.name} />
                </div>
                <p className='types_details'>Types</p>
            </div>
            <div className='data-details'>
                <p><span>{pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemonspecy.generation_id}</span>Generation</p>
                <p><span>{pokemon.pokemon_v2_pokemons[0].height} kg</span>Height</p>
                <p><span>{pokemon.pokemon_v2_pokemons[0].weight} m</span>Weight</p>
            </div>
        </div>
    )
}

PokemonDetails.propTypes = {
    pokemon: PropTypes.object
}
export default PokemonDetails