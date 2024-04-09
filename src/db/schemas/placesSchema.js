import { Schema } from "mongoose";

export const placesSchema = new Schema({
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  placesType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    number: {
      type: integer,
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
    zipCode: {
      type: integer,
      required: true,
    },
    price: {
      type: integer,
      required: true,
    },
  },
  restaurant: {
    foodTypes: {
      type: String,
      required: true,
    },
    placesAwards: {
      type: integer,
      required: true,
    },
  },
  museum: {
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
  },
  bar: {
    barTypes: {
      type: String,
      required: true,
    },
  },
  park: {
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
  },
});
