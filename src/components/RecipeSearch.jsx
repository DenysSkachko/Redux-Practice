import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecipeCard from './RecipeCard';
import Input from './ui/Input';
import { searchRecipes } from '../store/searchActions';
import { selectorSearch } from '../utils/selectors';

const RecipeSearch = ({ onSelect }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectorSearch);
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(searchRecipes(value));
  };

  return (
    <div className="flex flex-col gap-5">
      <Input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={handleSearchChange}
        className="w-full p-4 rounded-lg border border-gray-300 text-lg"
      />

      {recipes.length === 0 ? (
        <p className="text-accent">No recipes yet.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 mt-2">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeSearch;
