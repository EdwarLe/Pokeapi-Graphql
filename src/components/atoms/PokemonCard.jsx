import PropTypes from 'prop-types'

const PokemonCard = ({ pokemon, onClick }) => {
    return (
        <div className='pokemon-card'>
            <div className='pokemon-img-card'>
                <img src={pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites.front_default} alt={pokemon.name}/>
            </div>
            <p>{pokemon.name}</p>
            <div className='bg-decoration'></div>
        </div>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object,
    onClick: PropTypes.func.isRequired
}
export default PokemonCard