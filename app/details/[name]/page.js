import DetailStep from "@/components/details/DetailStep";
import DetailsHero from "@/components/details/DetailsHero";
import { connectToDataBase } from "@/dbconnect/connector";
import { getRecipe } from "@/query/queries";
export const metadata = {
  title: "Details",
  description: "The official khanaKhazana website.",
};

export default async function Details({ params: { name } }) {
  await connectToDataBase();
  const recipeName = decodeURIComponent(name).replace(/_/g, " ");
  const fullRecipe = await getRecipe(recipeName);

  return (
    <>
      <DetailsHero recipe={fullRecipe} />
      <DetailStep steps={fullRecipe?.steps} />
    </>
  );
}
