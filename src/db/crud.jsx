import { PlaceModel } from "./models/PlaceModel.js";

export const createPlaces = async ({ description, isDone = false }) => {
  const newPlace = new PlaceModel({ description, isDone });

  await newPlace.save();

  return newPlace;
};
export const readPlaces = async () => await PlaceModel.find();
export const readPlace = async (placeId) => await PlaceModel.findById(placeId);
export const updatePlace = async (
  placeId,
  { description = "", isDone = false }
) => {
  const input = {
    description: description.trim() || undefined,
    isDone: isDone ?? undefined,
  };
  const updatedPlace = await PlaceModel.findByIdAndUpdate(placeId, input, {
    returnDocument: "after",
  });

  return updatedPlace;
};
export const deletePlace = async (placeId) => {
  const place = await PlaceModel.findOneAndDelete({ _id: placeId });

  if (!place) {
    return null;
  }

  return place;
};
