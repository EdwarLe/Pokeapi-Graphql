import { useSelector } from "react-redux"
import {  useParams } from "react-router-dom"
import PokemonDetails from "../components/organisms/PokemonDetails"
import '../styles/pokemonDetails.css'

const PokemonDetailsPage = () => {
    const {id} = useParams()
    const pokemonList = useSelector(state => state.pokemon.pokemonList)

    if(pokemonList.length === 0) {
        return <p>...Loading</p>
    }

    const pokemon = pokemonList.find(poke => poke.id === parseInt(id))

    console.log(pokemon)
    return (
        <div className="pokemon-details-container">
            <PokemonDetails pokemon={pokemon}/>
        </div>
    )
}

export default PokemonDetailsPage