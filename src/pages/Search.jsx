import { useState } from 'react';
import RecipeSearch from '../components/RecipeSearch';
import RecipeDetails from '../components/RecipeDetail';
import PageTitle from '../components/PageTitle';

const Search = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="flex gap-20">
      <div className="w-[717px]">
        <PageTitle title="Search" />

        <RecipeSearch onSelect={setSelectedRecipe} />
      </div>

      <div className="w-106 rounded-[30px] overflow-hidden">
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </div>
    </div>
  );
};

export default Search;
