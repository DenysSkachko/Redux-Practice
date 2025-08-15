import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../store/recipeActions';
import RecipeDetails from '../components/RecipeDetail';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.items);
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
        <div className="flex w-full max-w-[717px] justify-between items-center mb-6">
          <h1 className="font-bold text-4xl text-primary-alt uppercase">Food</h1>
          <a href="/add" className="text-primary-alt flex gap-6 items-center cursor-pointer">
            <img src="/add.svg" alt="" width={30} height={30} />
            <p className="text-2xl">Add new recipe</p>
          </a>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="font-medium text-4xl text-[#9CB82E] uppercase">EXPLORE RECIPES</h2>

          <ul className="grid grid-cols-2 gap-14 w-fit">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={setSelectedRecipe}
                isSelected={selectedRecipe?.id === recipe.id}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="w-106 rounded-[30px] overflow-hidden">
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </div>
    </div>
  );
};

export default Home;
