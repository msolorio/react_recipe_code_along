import Recipe from './Recipe';

function RecipesList(props) {
  const recipesComps = props.recipes.map((recipeData) => {
    return (
      <Recipe 
        key={recipeData._id} 
        recipe={recipeData}
      />
    );
  });

  return (
    <section className="recipes-section">
      <button className="add-recipe-button">
        Add Recipe
      </button>

      {recipesComps}
    </section>
  );
}

export default RecipesList;
