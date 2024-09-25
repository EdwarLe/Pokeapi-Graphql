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

const HomePage = () => {
    const [valueInput, setValueInput] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const pokemonList = useSelector(state => state.pokemon.pokemonList)
    const foundPokemon = useSelector(state => state.pokemon.foundPokemonList)
    const quantity = 18
    const dispatch = useDispatch()
    const dataPokemons = foundPokemon.length !== 0 ? foundPokemon : pokemonList
    const { lastPages, itemsInCurrentPage, pagesInCurrentBlock } = paginateData(dataPokemons, currentPage, quantity)

    const handleInputChange = (e) => {
        setValueInput(e.target.value)
    }

    const pokemonSearched = pokemonList.filter(poke => poke.name.includes(valueInput))
    
    useEffect(() => {
        dispatch(setPokemonFound(pokemonSearched))
    }, [valueInput])

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
                        <Input placeholder="Search by name..." value={valueInput} onChange={handleInputChange}/>
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