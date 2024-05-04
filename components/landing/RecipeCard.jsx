import Image from "next/image";

export default function RecipeCard({ recipe }) {
  return (
    <>
      <div className="card">
        <Image
          src={recipe?.thumbnail}
          className="rounded-md"
          alt=""
          width={700}
          height={700}
        />
        <h4 className="my-2">{recipe?.name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {recipe?.rating}.0</span>
          <span>By: {recipe?.author}</span>
        </div>
      </div>
    </>
  );
}
