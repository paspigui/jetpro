import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { FormField } from "@/components/FormField";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { Field } from "formik";
import { numberValidator, stringValidator } from "@/validators";

const initialValues = {
  placesType: ["Restaurant", "Museum", "Bar", "Park"],
  placesName: "",
  placesAddress: "",
  placesZipCode: "",
  placesCity: "",
  placesCountry: "",
  isFree: ["Gratuit", "Payant"],
  parkAccess: ["Public", "Privé"],
  museumTypes: ["Histoire", "Art", "Science", "Ethnographie", "Autre"],
  artTypes: ["Peinture", "Sculpture", "Photographie", "Autre"],
  foodTypes: [
    "Français",
    "Italien",
    "Chinois",
    "Japonais",
    "Fast-Food",
    "Autre",
  ],
  placesAwards: [1, 2, 3],
  barTypes: ["Pub", "Cocktail", "Dégustation", "Autre"],
  parkTypes: ["Municipal", "Jardin", "Forêt", "Parc d'attractions", "Autre"],
  Price: [1, 2, 3, 4, 5],
};
const validationSchema = yup.object({});
const CreatePlacesPage = () => {
  const handleSubmit = async ({}, { resetForm }) => {
    await axios.post("http://localhost:3000/api/places", {});

    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            Choisissez le type d'endroit :
            {initialValues.placesType.map((type) => (
              <label key={type} className="mr-2">
                <Field
                  type="radio"
                  name="placesType"
                  value={type}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
            <FormField
              label="Nom de l'établissement"
              name="placesName"
              placeholder="Nom de la place"
              type="text"
            />
            <FormField
              label="Adresse"
              name="placesAddress"
              placeholder="Adresse"
              type="text"
            />
            <FormField
              label="Code postal"
              name="placesZipCode"
              placeholder="Code postal"
              type="integer"
            />
            <FormField
              label="Ville"
              name="placesCity"
              placeholder="Ville"
              type="text"
            />
            <FormField
              label="Pays"
              name="placesCountry"
              placeholder="Pays"
              type="text"
            />
            {values.placesType === "Museum" && (
              <>
                <FormField
                  label="Type de musée"
                  name="museumTypes"
                  placeholder="Type de musée"
                  as="select"
                  options={initialValues.museumTypes}
                />
                <FormField
                  label="Type d'art"
                  name="artTypes"
                  placeholder="Type d'art"
                  type="text"
                />
              </>
            )}
            {values.placesType === "Restaurant" && (
              <>
                <FormField
                  label="Type de cuisine"
                  name="foodTypes"
                  placeholder="Type de cuisine"
                  type="text"
                />
                <FormField
                  label="Nombre d'étoiles"
                  name="placesAwards"
                  placeholder="Nombre d'étoiles"
                  type="integer"
                />
              </>
            )}
            {values.placesType === "Bar" && (
              <>
                <FormField
                  label="Type de bar"
                  name="barTypes"
                  placeholder="Type de bar"
                  type="text"
                />
              </>
            )}
            {values.placesType === "Park" && (
              <>
                <FormField
                  label="Type de parc"
                  name="parkTypes"
                  placeholder="Type de parc"
                  type="text"
                />
                Accessibilité :
                {initialValues.parkAccess.map((type) => (
                  <label key={type} className="mr-2">
                    <Field
                      type="radio"
                      name="parkAccess"
                      value={type}
                      className="mr-2"
                    />
                    {type}
                  </label>
                ))}
              </>
            )}
            <FormField
              label="Prix"
              name="Price"
              placeholder="Prix"
              type="integer"
            />
            <Button type="submit">Créer</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CreatePlacesPage;
