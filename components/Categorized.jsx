import Link from "next/link";
import RecipeCard from "./landing/RecipeCard";

export default function Categorized({ category, recipes }) {
  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">{category}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
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
    </section>
  );
}
