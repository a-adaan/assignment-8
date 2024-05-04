import Categorized from "@/components/Categorized";
import { connectToDataBase } from "@/dbconnect/connector";
import { getRecipesByCat } from "@/query/queries";

export const metadata = {
  title: "Category",
  description: "The official khanaKhazana website.",
};

export default async function Category({ params: { category } }) {
  await connectToDataBase();
  const cate = decodeURIComponent(category).replace(/_/g, " ");
  const recipes = await getRecipesByCat(cate);

  return <Categorized category={cate} recipes={recipes} />;
}
