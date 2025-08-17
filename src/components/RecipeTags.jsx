import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByTag, clearAllTags, getTagColor, getAllTags } from '../store/tagActions';
import RecipeCard from './RecipeCard';
import { selectorActiveTags, selectorRecipe } from '../utils/selectors';
import { selectorFiltered } from '../utils/selectors';

const RecipeTags = ({ onSelect, selectedRecipe }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectorRecipe);
  const activeTags = useSelector(selectorActiveTags);

  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const tags = dispatch(getAllTags());
    setAllTags(tags);
  }, [recipes, dispatch]);

  const displayedRecipes = useSelector(selectorFiltered)

  return (
    <div className="flex flex-col gap-[30px]">
      {allTags.length > 0 && (
        <div className="flex flex-wrap w-full gap-2 mb-7.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => dispatch(filterByTag(tag))}
              style={{ backgroundColor: getTagColor(tag) }}
              className={`px-4 py-2 rounded-[30px] text-light text-xs font-medium cursor-pointer transition-all duration-300
                ${activeTags.includes(tag) ? 'scale-110' : ''}`}
            >
              {tag}
            </button>
          ))}

          {activeTags.length > 0 && (
            <button
              onClick={() => dispatch(clearAllTags())}
              className="px-4 py-2 rounded-[30px] text-dark text-xs font-medium bg-gray-200 hover:bg-gray-300"
            >
              Clear tags
            </button>
          )}
        </div>
      )}

      <ul className="grid grid-cols-2 gap-14 w-fit mt-5">
        {displayedRecipes.length === 0 ? (
          <p className="text-accent">
            {activeTags.length > 0 ? 'No recipes found.' : 'No recipes yet.'}
          </p>
        ) : (
          displayedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelect}
              isSelected={selectedRecipe?.id === recipe.id}
              tags={true}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default RecipeTags;
