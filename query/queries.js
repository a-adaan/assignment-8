import { recipeModel } from "@/models/recipes-model";
import { usersModel } from "@/models/users-model";
import { replaceIdInArray, replaceIdInObject } from "@/utils/idUtils";
import mongoose from "mongoose";

async function getAllRecipes() {
  try {
    const allRecipes = await recipeModel.find().lean();

    return replaceIdInArray(allRecipes);
  } catch (error) {
    console.log(error);
  }
}
async function getRecipe(recipeName) {
  try {
    const recipe = await recipeModel.findOne({ name: recipeName }).lean();

    return replaceIdInObject(recipe);
  } catch (error) {
    console.log(error);
  }
}

async function getRecipesByCat(cat) {
  try {
    const recipes = await recipeModel.find({ category: cat }).lean();
    return replaceIdInArray(recipes);
  } catch (error) {
    console.log(error);
  }
}

async function createUsers(user) {
  return await usersModel.create(user);
}

async function findUser(userInfo) {
  const user = await usersModel.findOne(userInfo).lean();
  if (user) {
    return replaceIdInObject(user);
  }
  return null;
}

async function toggleFav(recipeId, authId) {
  const user = await usersModel.findById(authId);
  if (user) {
    const isFav = await user.favourites.find(
      (id) => id.toString() === recipeId
    );
    if (isFav) {
      user.favourites.pull(new mongoose.Types.ObjectId(recipeId));
    } else {
      user.favourites.push(new mongoose.Types.ObjectId(recipeId));
    }
    user.save();
    return user;
  }
}

export {
  getAllRecipes,
  getRecipe,
  getRecipesByCat,
  createUsers,
  findUser,
  toggleFav,
};
