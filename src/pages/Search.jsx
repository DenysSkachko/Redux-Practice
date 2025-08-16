import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import RecipeDetails from '../components/RecipeDetail';
import { selectorRecipe } from '../utils/selectors';
import Input from '../components/ui/Input';

const Search = () => {
  const recipes = useSelector(selectorRecipe);
  const [query, setQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  useEffect(() => {
    const filtered = recipes.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredRecipes(filtered);
  }, [query, recipes]);

  return (
    <div className="flex gap-20">
      <div>
        <div className="flex w-full max-w-[717px] justify-between items-center mb-15">
          <h1 className="font-bold text-4xl text-primary-alt uppercase">Search</h1>
        </div>

        <div className="flex flex-col gap-[30px]">
          <Input
            type="text"
            placeholder="Search recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 text-lg"
          />

          {filteredRecipes.length === 0 ? (
            <p className="text-accent">No recipes found.</p>
          ) : (
            <ul className="grid grid-cols-2 gap-14 w-fit">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={setSelectedRecipe}
                  isSelected={selectedRecipe?.id === recipe.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="w-106 rounded-[30px] overflow-hidden">
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </div>
    </div>
  );
};

export default Search;
