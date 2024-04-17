import { Schema } from "mongoose";
import { number } from "yup";

export const placeSchema = new Schema({
  // timestamps: {
  //   createdAt: ,
  //   updatedAt: Date.now(),
  // },
  placesType: {
    type: String,
    enum: ["Restaurant", "Museum", "Bar", "Park"],
    required: true,
  },
  placesName: {
    type: String,
    required: true,
  },
  placesAddress: {
    number: {
      type: Number,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
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
      required: function () {
        return this.placesType === "Restaurant";
      },
    },
    awards: {
      type: Number,
      enum: [0, 1, 2, 3],
      required: function () {
        return this.placesType === "Restaurant";
      },
    },
  },
  museum: {
    museumTypes: {
      type: String,
      enum: ["Histoire", "Art", "Science", "Ethnographie", "Autre"],
      required: function () {
        return this.placesType === "Museum";
      },
    },
    artTypes: {
      type: String,
      enum: ["Peinture", "Sculpture", "Photographie", "Autre"],
      required: function () {
        return this.placesType === "Museum";
      },
    },
    isFree: {
      type: Boolean,
      required: function () {
        return this.placesType === "Museum";
      },
    },
  },
  bar: {
    barTypes: {
      type: String,
      enum: ["Pub", "Cocktail", "Dégustation", "Autre"],
      required: function () {
        return this.placesType === "Bar";
      },
    },
  },
  park: {
    parkTypes: {
      type: String,
      enum: ["Municipal", "Jardin", "Forêt", "Parc d'attractions", "Autre"],
      required: function () {
        return this.placesType === "Park";
      },
    },
    parkAccess: {
      type: String,
      enum: ["Privé", "Public"],
      required: function () {
        return this.placesType === "Park";
      },
    },
  },
});
