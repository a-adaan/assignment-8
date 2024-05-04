import Link from "next/link";

export default function CategoryList({ recipes }) {
  const category = recipes.map((recipe) => recipe?.category);
  const allcategory = category.filter(
    (item, index) => category.indexOf(item) === index
  );
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {allcategory.map((cat) => (
          <li key={cat}>
            <Link href={`/category/${cat.replace(/\s+/g, "_")}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
