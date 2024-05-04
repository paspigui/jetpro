import { Schema } from "mongoose"

export const placeSchema = new Schema({
  // timestamps: {
  //   createdAt: ,
  //   updatedAt: Date.now(),
  // },
  placesType: {
    type: String,
    enum: ["Restaurant", "Musée", "Bar", "Parc"],
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
  averagePrice: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required() {
      return this.isFree === false
    },
  },
  restaurant: {
    foodTypes: {
      type: String,
      enum: [
        "Français",
        "Italien",
        "Africain",
        "Japonais",
        "Fast-food",
        "Autre",
      ],
      required() {
        return this.placesType === "Restaurant"
      },
    },
    awards: {
      type: Number,
      enum: [0, 1, 2, 3],
      required() {
        return this.placesType === "Restaurant"
      },
    },
  },
  museum: {
    types: {
      type: String,
      enum: ["Histoire", "Art", "Science", "Ethnographie", "Autre"],
      required() {
        return this.placesType === "Musée"
      },
    },
    artTypes: {
      type: String,
      enum: ["Peinture", "Sculpture", "Photographie", "Autre"],
      required() {
        return this.placesType === "Musée"
      },
    },
  },
  bar: {
    types: {
      type: String,
      enum: ["Pub", "Cocktail", "Dégustation", "Autre"],
      required() {
        return this.placesType === "Bar"
      },
    },
  },
  park: {
    types: {
      type: String,
      enum: ["Municipal", "Jardin", "Forêt", "Parc d'attractions", "Autre"],
      required() {
        return this.placesType === "Parc"
      },
    },
    accessibility: {
      type: String,
      enum: ["Privé", "Public"],
      required() {
        return this.placesType === "Parc"
      },
    },
  },
  price: {
    type: Number,
    required() {
      return (
        (this.placesType === "Musée" && this.isFree === false) ||
        (this.placesType === "Parc" &&
          this.park.accessibility === "Privé" &&
          this.isFree === false)
      )
    },
  },
})
