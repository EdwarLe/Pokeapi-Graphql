import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/pokemonSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.pokemon.filterList)

    const handleFilterChange = (event) => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <div className="filter-container">
            <select onChange={handleFilterChange}>
                <option value="">All Types</option>
                { types.map(type => <option key={type.name}>{type.name}</option>)}
            </select>
        </div>
    );
};

export default Filter;
