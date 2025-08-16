import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RecipeDetails from '../components/RecipeDetail';
import { selectorRecipe } from '../utils/selectors';

const RecipePage = () => {
  const { id } = useParams();
  const recipes = useSelector(selectorRecipe);
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <p>Recipe not found</p>;

  return <RecipeDetails recipe={recipe} />;
};

export default RecipePage;
