import { Schema } from "mongoose";

export const placesSchema = new Schema({
  placesType: {
    type: String,
    required: true,
  },
  placesName: {
    type: Boolean,
    required: true,
  },
  placesAddress: {
    type: String,
    required: true,
  },
  placesCity: {
    type: String,
    required: true,
  },
  placesZipCode: {
    type: String,
    required: true,
  },
  placesCountry: {
    type: String,
    required: true,
  },
  foodTypes: {
    type: String,
    required: true,
  },
  placesAwards: {
    type: Number,
    required: true,
  },
  museumTypes: {
    type: String,
    required: true,
  },
  artTypes: {
    type: String,
    required: true,
  },
  isFree: {
    type: Boolean,
    required: true,
  },
  barTypes: {
    type: String,
    required: true,
  },
  parkTypes: {
    type: String,
    required: true,
  },
  parkAccess: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
