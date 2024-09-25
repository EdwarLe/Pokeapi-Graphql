import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemonList: [],
    foundPokemonList: [],
    favorites: [],
    filter: '',
    filterList: []
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList: (state, action) => {
            state.pokemonList = action.payload;
        },

        setPokemonFound: (state, action) => {
            state.foundPokemonList = action.payload
        },

        addFavorite: (state, action) => {
            if (!state.favorites.find(pokemon => pokemon.id === action.payload.id)) {
                state.favorites.push(action.payload)
            }
        },

        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(pokemon => pokemon.id !== action.payload)
        },

        setFilterList: (state, action) => {
            state.filterList = action.payload
        },

        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { setPokemonList, setPokemonFound, addFavorite, removeFavorite, setFilter, setFilterList } = pokemonSlice.actions
export default pokemonSlice.reducer