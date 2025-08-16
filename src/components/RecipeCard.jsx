const RecipeCard = ({ recipe, onSelect, isSelected }) => {
  return (
    <li
      onClick={() => onSelect(recipe)}
      className={`relative w-82 h-50 overflow-hidden rounded-[30px] cursor-pointer transition-all duration-300
        ${isSelected ? 'scale-105' : ''}`}
    >
      {recipe.image ? (
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full rounded bg-accent flex items-center justify-center"></div>
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0) 20%, rgba(0,0,0,0.71) 95.73%)',
        }}
      />
      <h3 className="absolute left-6 bottom-6 text-light font-medium text-lg">{recipe.title}</h3>
    </li>
  );
};

export default RecipeCard;
