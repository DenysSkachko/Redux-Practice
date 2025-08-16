import RecipeCard from './RecipeCard';
import Input from './ui/Input';

const RecipesSection = ({
  title,
  recipes,
  selectedRecipe,
  onSelect,
  showSearch = false,
  searchValue,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h2 className="font-medium text-4xl text-[#9CB82E] uppercase mb-10">{title}</h2>

      {showSearch && (
        <Input
          type="text"
          placeholder="Search recipes"
          value={searchValue}
          onChange={onSearchChange}
          className="w-full p-4 rounded-lg border border-gray-300 text-lg mb-7.5"
        />
      )}

      {recipes.length === 0 ? (
        <p className="text-accent">{showSearch ? 'No recipes found.' : 'No recipes yet.'}</p>
      ) : (
        <ul className="grid grid-cols-2 gap-14 w-fit">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={recipe.id || index}
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

export default RecipesSection;
