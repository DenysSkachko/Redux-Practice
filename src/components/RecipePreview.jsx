import { useSelector } from 'react-redux';
import RecipeDetails from './RecipeDetail';
import { selectorSelectedRecipe } from '../utils/selectors';

const RecipePreview = () => {
  const selectedRecipe = useSelector(selectorSelectedRecipe);

  if (!selectedRecipe) return null;

  return (
    <div className="w-106 rounded-[30px] overflow-hidden">
      <RecipeDetails recipe={selectedRecipe} />
    </div>
  );
};

export default RecipePreview;
