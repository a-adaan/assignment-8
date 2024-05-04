"use server";

import { revalidatePath } from "next/cache";

const { createUsers, findUser, toggleFav } = require("@/query/queries");
const { redirect } = require("next/navigation");

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUsers(user);
  redirect("/login");
}

async function performLogin(formData) {
  const userInfo = {};
  userInfo.email = formData.get("email");
  userInfo.password = formData.get("password");
  const foundUser = await findUser(userInfo);
  if (foundUser) {
    // console.log(foundUser);
    return foundUser;
  }
  return foundUser;
}

async function addFavourite(recipeId, authId) {
  try {
    const user = await toggleFav(recipeId, authId);
    revalidatePath("/");
    const plainStringArray = user?.favourites.map((objectId) =>
      objectId.toString()
    );
    return plainStringArray;
  } catch (error) {
    console.log(error.message);
  }
}

export { registerUser, performLogin, addFavourite };
