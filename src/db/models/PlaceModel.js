import mongoose from "mongoose";
import { placesSchema } from "../schemas/placeSchema";

export const PlacesModel =
  mongoose.models.Places || mongoose.model("Places", placesSchema);
