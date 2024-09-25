import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import pokeballOpacity from '../../assets/pokeball-opacity.png'
import backArrow from '../../assets/back-arrow.png'

const PokemonDetails = ({ pokemon }) => {
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
                    <img src={pokemon.pokemon_v2_pokemonsprites[0].sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                </div>
                <div className='type-container'>
                    {pokemon.pokemon_v2_pokemontypes.map(type => <p key={type.pokemon_v2_type.name} className='types_details'>{type.pokemon_v2_type.name}</p>)}
                </div>
                
            </div>
            <div className='data-details'>
                <p><span>{pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.pokemon_v2_generation.name}</span>Generation</p>
                <p><span>{pokemon.height} kg</span>Height</p>
                <p><span>{pokemon.weight} m</span>Weight</p>
            </div>
        </div>
    )
}

PokemonDetails.propTypes = {
    pokemon: PropTypes.object
}
export default PokemonDetails