import { PlaceModel } from "./models/PlaceModel.js"

export const createPlace = async (values) => {
  console.log("CreateDB", values)
  const newPlace = new PlaceModel(values)

  await newPlace.save()

  return newPlace
}
export const readPlaces = async () => await PlaceModel.find()

export const readPlace = async (placeId) => await PlaceModel.findById(placeId)

export const updatePlace = async (placeId, values) => {
  console.log("UpdateDB", values)
  await PlaceModel.replaceOne({ _id: placeId }, { ...values, _id: placeId })

  const updatedPlace = await PlaceModel.findById(placeId)

  if (!updatedPlace) {
    return null
  }

  return updatedPlace
}

export const deletePlace = async (placeId) => {
  console.log("DeleteDB", placeId)
  const place = await PlaceModel.findOneAndDelete({ _id: placeId })

  if (!place) {
    return null
  }

  return place
}
