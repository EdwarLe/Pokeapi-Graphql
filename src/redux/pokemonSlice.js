import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemonList: [],
    favorites: [],
    filter: ''
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList: (state, action) => {
            state.pokemonList = action.payload;
        },

        addFavorite: (state, action) => {
            if (!state.favorites.find(pokemon => pokemon.id === action.payload.id)) {
                state.favorites.push(action.payload)
            }
        },

        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(pokemon => pokemon.id !== action.payload)
        },

        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { setPokemonList, addFavorite, removeFavorite, setFilter } = pokemonSlice.actions
export default pokemonSlice.reducer