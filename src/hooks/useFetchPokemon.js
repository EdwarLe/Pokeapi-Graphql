import { gql, useQuery } from "@apollo/client";

const GET_ALL_POKEMON = gql`
    query {
        pokemon_v2_pokemonspecies(order_by: {name: asc}) {
            name
            id
            pokemon_v2_pokemons {
                height
                weight
                pokemon_v2_pokemonspecy {
                generation_id
                }
            pokemon_v2_pokemonsprites {
                sprites
            }
            }
        }
}`

const useFetchPokemon = () => {
    const { loading, error, data } = useQuery(GET_ALL_POKEMON)
    return { loading, error, data }
}

export default useFetchPokemon