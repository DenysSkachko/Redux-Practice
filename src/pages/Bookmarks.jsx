import React, { useState, useEffect } from 'react';
import RecipeDetails from '../components/RecipeDetail';
import RecipeCard from '../components/RecipeCard';
import useBookmarks from '../hooks/useBookmarks';
import PageTitle from '../components/PageTitle';
import RecipesSection from '../components/RecipeSection';

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="flex gap-20">
      <div>
        <PageTitle title="Bookmarks" />

        <RecipesSection
          title="My bookmarks"
          recipes={bookmarks}
          selectedRecipe={selectedRecipe}
          onSelect={setSelectedRecipe}
        />
      </div>

      <div className="w-106 rounded-[30px] overflow-hidden">
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </div>
    </div>
  );
};

export default Bookmarks;
