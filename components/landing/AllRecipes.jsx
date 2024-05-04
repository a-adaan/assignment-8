import Link from "next/link";
import RecipeCard from "./RecipeCard";

export default function AllRecipes({ recipes }) {
  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/details/${recipe?.name.replace(/\s+/g, "_")}`}
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
}
