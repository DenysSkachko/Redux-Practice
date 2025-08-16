import React, { useState, useEffect } from 'react';
import RecipeDetails from '../components/RecipeDetail';
import RecipeCard from '../components/RecipeCard';
import useBookmarks from '../hooks/useBookmarks';

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();
  const [selectedRecipe, setSelectedRecipe] = useState(null);


  return (
    <div className="flex gap-20">
      <div>
        <div className="flex w-full max-w-[717px] justify-between items-center mb-15">
          <h1 className="font-bold text-4xl text-primary-alt uppercase">Bookmarks</h1>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="font-medium text-4xl text-[#9CB82E] uppercase">My bookmarks</h2>


          {bookmarks.length === 0 ? (
            <p className="text-accent">No bookmarks yet.</p>
          ) : (
            <ul className="grid grid-cols-2 gap-14 w-fit">
              {bookmarks.map((recipe) => (
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

export default Bookmarks;
