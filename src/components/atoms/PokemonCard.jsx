import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PokemonCard = ({ pokemon }) => {

    return (
        <div className='pokemon-card'>
            <Link
                to={`/pokemon/${pokemon.id}`}>
                <div className='pokemon-img-card'>
                    <img src={pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites.front_default} alt={pokemon.name}/>
                </div>
                <p>{pokemon.name}</p>
                <div className='bg-decoration'></div>
            </Link>
        </div>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object
}
export default PokemonCard