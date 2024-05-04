"use client";
import { addFavourite } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function AddFav({ recipeId }) {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isfavourite, setIsfavourite] = useState(
    auth?.favourites.includes(recipeId)
  );
  async function isFav() {
    if (auth) {
      const favArray = await addFavourite(recipeId, auth?.id);
      const newAuth = {
        ...auth,
        favourites: favArray,
      };
      setAuth(newAuth);
      setIsfavourite(!isfavourite);
    } else {
      router.push("/login");
    }
  }
  return (
    <div
      className={`flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36] `}
      onClick={() =>
        startTransition(() => {
          isFav();
        })
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isfavourite ? "red" : "none"}
        stroke={isfavourite ? "red" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
      <span>Favourite</span>
    </div>
  );
}
