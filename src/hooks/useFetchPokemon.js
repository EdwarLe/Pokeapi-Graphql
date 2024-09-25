import { gql, useQuery } from "@apollo/client";

const GET_ALL_POKEMON = gql`
    query {
        pokemon_v2_pokemon(order_by: {name: asc}) {
            id
            name
            height
            weight
            pokemon_v2_pokemonsprites {
                sprites
            }
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                    pokemon_v2_generation {
                    name
                    }
                }
            }
        }
        pokemon_v2_type {
            name
        }
    }`

const useFetchPokemon = () => {
    const { loading, error, data } = useQuery(GET_ALL_POKEMON)
    return { loading, error, data }
}

export default useFetchPokemon