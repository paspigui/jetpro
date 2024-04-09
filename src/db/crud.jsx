import { PlacesModel } from "@/db/models/placesModel";

export const createPlace = async () => {
  const newPlace = new PlacesModel({
    
  });

  await newPlace.save();

  return newPlace;
}

