import mongoose from "mongoose";
import { placesSchema } from "../schemas/placesSchema";

export const PlacesModel =
  mongoose.models.Places || mongoose.model("Places", placesSchema);
