import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorRecipe } from '../utils/selectors';
import RecipeDetails from '../components/RecipeDetail';
import PageTitle from '../components/PageTitle';
import RecipesSection from '../components/RecipeSection';
import useBookmarks from '../hooks/useBookmarks';

const Bookmarks = () => {
  const allRecipes = useSelector(selectorRecipe);
  const { bookmarks } = useBookmarks();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const bookmarkedRecipes = allRecipes.filter((recipe) =>
    bookmarks.includes(recipe.id)
  );

  return (
    <div className="flex gap-20">
      <div>
        <PageTitle title="Bookmarks" />

        <RecipesSection
          title="My bookmarks"
          recipes={bookmarkedRecipes}
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
