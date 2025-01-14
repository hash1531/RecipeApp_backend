import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./src/routes/users.js";
import { recipesRouter } from "./src/routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter)

mongoose.connect(
  "mongodb+srv://gurditt1508:MERNpassword123@recipes.xcueqbs.mongodb.net/recipes?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("SERVER STARTED!"));
