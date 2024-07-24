import mongoose from "mongoose";

const RecipesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [{ type: String, required: true }],
  },
  instructions: { type: String, required: true },
  imageURL: { type: String, required: true },
  cookingTime: { type: Number, required: true },

  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

export const RecipeModel = new mongoose.model("recipes", RecipesSchema);
