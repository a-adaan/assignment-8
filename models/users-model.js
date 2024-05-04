import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: "String",
  },
  lastName: {
    type: "String",
  },
  email: {
    type: "String",
  },
  password: {
    type: "String",
  },
  favourites: {
    required: true,
    type: Array,
  },
});

export const usersModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
