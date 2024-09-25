import PropTypes from 'prop-types'
import PokemonCard from '../atoms/PokemonCard'

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons?.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon}/>
      ))}
    </div>
  )
}

PokemonList.propTypes = {
  pokemons: PropTypes.array
}

export default PokemonList