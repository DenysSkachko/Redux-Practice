import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import RecipeDetails from '../components/RecipeDetail';
import RecipeMarks from '../components/RecipeMarks';

const Bookmarks = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="flex gap-20">
      <div className="w-[717px]">
        <PageTitle title="Bookmarks" />

        <RecipeMarks
          onSelect={setSelectedRecipe}
          selectedRecipe={selectedRecipe}
        />
      </div>

      <div className="w-106 rounded-[30px] overflow-hidden">
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </div>
    </div>
  );
};

export default Bookmarks;
