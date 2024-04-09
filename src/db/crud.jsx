import { PlacesModel } from "@/db/models/placesModel";

export const createPlace = async () => {
  const newPlace = new PlacesModel({
    placesType,
    placesName,
    placesAddress,
    placesZipCode,
    placesCity,
    placesCountry,
  });

  await newPlace.save();

  return newPlace;
}

