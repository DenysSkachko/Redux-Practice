import { useState, useMemo } from 'react';
import RecipeCard from './RecipeCard';
import { getAllTags, filterByTags, addTag, removeTag, clearTags, getTagColor } from '../utils/tags';

const RecipesSection = ({
  title,
  recipes,
  selectedRecipe,
  onSelect,
}) => {
  const [activeTags, setActiveTags] = useState([]);

  const allTags = useMemo(() => getAllTags(recipes), [recipes]);

  const displayedRecipes = useMemo(() => {
    return filterByTags(recipes, activeTags);
  }, [recipes, activeTags]);

  const toggleTag = (tag) => {
    setActiveTags(activeTags.includes(tag) ? removeTag(activeTags, tag) : addTag(activeTags, tag));
  };

  const handleClearTags = () => setActiveTags(clearTags());

  return (
    <div className="flex flex-col gap-[30px]">
      <h2 className="font-medium text-4xl text-[#9CB82E] uppercase mb-5">{title}</h2>

      {allTags.length > 0 && (
        <div className="flex flex-wrap w-full gap-2 mb-7.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{ backgroundColor: getTagColor(tag) }}
              className={`px-4 py-2 rounded-[30px] text-light text-xs font-medium cursor-pointer transition-all duration-300
                ${activeTags.includes(tag) ? 'scale-110' : ''}`}
            >
              {tag}
            </button>
          ))}
          {activeTags.length > 0 && (
            <button
              onClick={handleClearTags}
              className="px-4 py-2 rounded-[30px] text-dark text-xs font-medium bg-gray-200 hover:bg-gray-300"
            >
              Clear tags
            </button>
          )}
        </div>
      )}

      {displayedRecipes.length === 0 ? (
        <p className="text-accent">
          {activeTags.length > 0 ? 'No recipes found.' : 'No recipes yet.'}
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-14 w-fit">
          {displayedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelect}
              isSelected={selectedRecipe?.id === recipe.id}
              onTagClick={toggleTag}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipesSection;
