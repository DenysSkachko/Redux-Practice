import React from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';
import { selectorRecipe } from '../utils/selectors';
import useBookmarks from '../hooks/useBookmarks';

const RecipeMarks = ({ onSelect, selectedRecipe }) => {
  const allRecipes = useSelector(selectorRecipe);
  const { bookmarks } = useBookmarks();

  const bookmarkedRecipes = allRecipes.filter((recipe) => bookmarks.includes(recipe.id));

  return (
    <div className="flex flex-col gap-[30px]">
      {bookmarkedRecipes.length === 0 ? (
        <p className="text-accent">You have no bookmarks yet.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-14 w-fit mt-5">
          {bookmarkedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelect}
              isSelected={selectedRecipe?.id === recipe.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeMarks;
