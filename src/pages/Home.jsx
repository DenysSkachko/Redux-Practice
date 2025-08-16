import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../store/recipeActions';
import RecipeDetails from '../components/RecipeDetail';
import RecipeCard from '../components/RecipeCard';
import { selectorRecipe } from '../utils/selectors';
import PageTitle from '../components/PageTitle';
import RecipesSection from '../components/RecipeSection';

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectorRecipe);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (recipes.length > 0 && !selectedRecipe) {
      setSelectedRecipe(recipes[0]);
    }
  }, [recipes, selectedRecipe]);

  return (
    <div className="flex gap-20">
      <div>
        <PageTitle
          title="Food"
          showButton={true}
          buttonText="Add new recipe"
          buttonIcon="/add.svg"
          buttonLink="/add"
        />

        <RecipesSection
          title="Explore Recipes"
          recipes={recipes}
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

export default Home;
