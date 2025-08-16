import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import RecipeDetails from '../components/RecipeDetail';
import { selectorRecipe } from '../utils/selectors';
import Input from '../components/ui/Input';
import PageTitle from '../components/PageTitle';
import RecipesSection from '../components/RecipeSection';
import { filterRecipes } from '../utils/search';

const Search = () => {
  const recipes = useSelector(selectorRecipe);
  const [query, setQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  useEffect(() => {
  const filtered = filterRecipes(recipes, query);
  setFilteredRecipes(filtered);
}, [query, recipes]);

  return (
    <div className="flex gap-20">
      <div>
        <PageTitle title="Search" />

        <RecipesSection
          title="Search Recipes"
          recipes={filteredRecipes}
          selectedRecipe={selectedRecipe}
          onSelect={setSelectedRecipe}
          showSearch={true}
          searchValue={query}
          onSearchChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="w-106 rounded-[30px] overflow-hidden">
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </div>
    </div>
  );
};

export default Search;
