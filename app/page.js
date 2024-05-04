import HeroSec from "@/components/HeroSec";
import AllRecipes from "@/components/landing/AllRecipes";
import CategoryList from "@/components/landing/CategoryList";
import { getAllRecipes } from "@/query/queries";

export default async function Home() {
  const recipes = await getAllRecipes();
  return (
    <>
      <HeroSec />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <CategoryList recipes={recipes} />
          <AllRecipes recipes={recipes} />
        </div>
      </section>
    </>
  );
}
