import Input from "../components/atoms/Input"
import PokemonList from "../components/molecules/PokemonList"
import pokeball from "../assets/pokeball.png"
import Filter from '../components/atoms/Filter'
import '../styles/homePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { setPokemonFound } from "../redux/pokemonSlice"
import Pagination from "../components/atoms/Pagination"
import { paginateData } from "../utils/pagination"
import { validateInput } from "../utils/validation"

const HomePage = () => {
    const [valueInput, setValueInput] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    // const [isValidationError, setIsValidationError] = useState(false)
    const [validationErrorMsg, setValidationErrorMsg] = useState('')
    const pokemonList = useSelector(state => state.pokemon.pokemonList)
    const foundPokemon = useSelector(state => state.pokemon.foundPokemonList)
    const types = useSelector(state => state.pokemon.filter)
    const dispatch = useDispatch()

    const quantityPokemonPerPage = 18
    
    const typesFiltered = pokemonList.filter(poke => poke.pokemon_v2_pokemontypes.some(type => type.pokemon_v2_type.name === types))
    
    const pokemonFiltered = typesFiltered.length !== 0 ? typesFiltered : pokemonList
    const dataPokemons = foundPokemon.length !== 0 ? foundPokemon : pokemonFiltered
    const pokemonSearched = pokemonFiltered.filter(poke => poke.name.toLowerCase().includes(valueInput.toLowerCase()))

    const { lastPages, itemsInCurrentPage, pagesInCurrentBlock } = paginateData(dataPokemons, currentPage, quantityPokemonPerPage)
    
    const handleInputChange = (e) => {
        let value = e.target.value
        setValueInput(value)

        const error = validateInput(value)

        setValidationErrorMsg(error)
        
    }


    
    useEffect(() => {
        dispatch(setPokemonFound(pokemonSearched))
    }, [valueInput, types, validationErrorMsg])

    return (
        <section className='app'>
            <div className='home-page'>
                <header>
                    <div className='nav-title'>
                        <div className='pokeball-img'>
                            <img src={pokeball} alt='pokeball'/>
                        </div>
                        <h1>Pokédex</h1>
                    </div>
                    <div className='input-filter-container'>
                        <div className="input-error-container">
                            <Input placeholder="Search by name..." value={valueInput} onChange={handleInputChange}/>
                            <small>{validationErrorMsg && validationErrorMsg}</small>
                        </div>
                        <Filter />
                    </div>
                </header>
                <Pagination lastPages={lastPages} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                <PokemonList pokemons={itemsInCurrentPage}/>
                <Pagination lastPages={lastPages} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </section>
        
    )
}


export default HomePage