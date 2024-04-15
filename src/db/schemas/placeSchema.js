import { Schema } from "mongoose";
import { number } from "yup";

export const placeSchema = new Schema({
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  placesType: {
    type: String,
    enum: ["Restaurant", "Museum", "Bar", "Park"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    number: {
      type: Number,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
  },
  isFree: {
    type: Boolean,
    required: true,
  },
  restaurant: {
    foodTypes: {
      type: String,
      enum: [
        "Francais",
        "Italien",
        "Chinois",
        "Japonais",
        "Fast-food",
        "Autre",
      ],
      required: true,
    },
    placesAwards: {
      type: number,
      enum: [0, 1, 2, 3],
      required: true,
    },
  },
  museum: {
    museumTypes: {
      type: String,
      enum: ["Histoire", "Art", "Science", "Ethnographie", "Autre"],
      required: true,
    },
    artTypes: {
      type: String,
      enum: ["Peinture", "Sculpture", "Photographie", "Autre"],
      required: true,
    },
    isFree: {
      type: Boolean,
      required: true,
    },
  },
  bar: {
    barTypes: {
      type: String,
      enum: ["Pub", "Cocktail", "Dégustation", "Autre"],
      required: true,
    },
  },
  park: {
    parkTypes: {
      type: String,
      enum: ["Municipal", "Jardin", "Forêt", "Parc d'attractions", "Autre"],
      required: true,
    },
    parkAccess: {
      type: String,
      enum: ["Privé", "Public"],
      required: true,
    },
  },
});
