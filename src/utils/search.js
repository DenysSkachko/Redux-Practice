const searchRecipes = (recipes, query) => {
  if (!query) return recipes;

  const lowerQuery = query.toLowerCase();

  return recipes.filter((r) => {
    const titleSearch = r.title.toLowerCase().includes(lowerQuery);

    const tagsSearch = r.tags?.some(tag =>
      tag.toLowerCase().includes(lowerQuery)
    );

    const ingredientsSearch = r.ingredients?.some(ing =>
      ing.name.toLowerCase().includes(lowerQuery)
    );

    return titleSearch || tagsSearch || ingredientsSearch;
  });
};

export default searchRecipes;