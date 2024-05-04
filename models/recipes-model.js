import mongoose from "mongoose";
import { Schema } from "mongoose";

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    required: true,
    type: String,
  },
  activeTime: {
    type: String,
    required: true,
  },
  totalTime: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  serves: {
    type: Number,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  steps: {
    type: Array,
    required: false,
  },
});

export const recipeModel =
  mongoose.models.recipes ?? mongoose.model("recipes", recipeSchema);
