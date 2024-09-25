import { useSelector } from 'react-redux';
import PokemonList from '../components/molecules/PokemonList';
import '../styles/favoritesPage.css'

const FavoritesPage = () => {
    const favorites = useSelector(state => state.pokemon.favorites);

    return (
        <div className="favorites">
        <h1>Favorites</h1>
        {favorites.length ? (
            <PokemonList pokemons={favorites} />
        ) : (
            <p>No favorites added yet.</p>
        )}
        </div>
    );
};

export default FavoritesPage;