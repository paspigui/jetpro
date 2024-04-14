import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { FormField } from "@/components/FormField";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { Field } from "formik";
import { numberValidator, priceValidator, stringValidator } from "@/validators";

const initialValues = {
  placesType: ["Restaurant", "Museum", "Bar", "Park"],
  placesName: "",
  placesAddress: "",
  placesZipCode: "",
  placesCity: "",
  placesCountry: "",
  isFree: ["true", "false"],
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
  placesAwards: [0, 1, 2, 3],
  barTypes: ["Pub", "Cocktail", "Dégustation", "Autre"],
  parkTypes: ["Municipal", "Jardin", "Forêt", "Parc d'attractions", "Autre"],
  price: [1, 2, 3, 4, 5],
};
const validationSchema = yup.object({
  price: priceValidator,
});
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
            <h1>Type de lieu</h1>
            <Field name="placesType" as="select">
              <option value=""></option>
              <option value="Restaurant">Restaurant</option>
              <option value="Museum">Musée</option>
              <option value="Bar">Bar</option>
              <option value="Park">Parc</option>
            </Field>
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
                <label>Types de musée</label>
                <Field name="museumTypes" as="select">
                  <options value=""></options>
                  <options value="Histoire">Histoire</options>
                  <options value="Art">Art</options>
                  <options value="Science">Science</options>
                  <options value="Ethnographie">Ethnographie</options>
                  <options value="Autre">Autre</options>
                </Field>
                <label>Types d'art</label>
                <Field name="artTypes" as="select">
                  <options value="">Choisissez un type d'art</options>
                  <options value="Peinture">Peinture</options>
                  <options value="Sculpture">Sculpture</options>
                  <options value="Photographie">Photographie</options>
                  <options value="Autre">Autre</options>
                </Field>
              </>
            )}
            {values.placesType === "Restaurant" && (
              <>
                <label>Types de cuisine</label>
                <Field name="foodTypes" as="select">
                  <option value=""></option>
                  <option value="Français">Français</option>
                  <option value="Italien">Italien</option>
                  <option value="Chinois">Chinois</option>
                  <option value="Japonais">Japonais</option>
                  <option value="Fast-Food">Fast-Food</option>
                  <option value="Autre">Autre</option>
                </Field>
                <label>Nombre d'étoiles</label>
                <Field name="placesAwards" as="select">
                  <option value=""></option>
                  <option value="O">Non étoilé</option>
                  <option value="1">1 étoile</option>
                  <option value="2">2 étoiles</option>
                  <option value="3">3 étoiles</option>
                </Field>
              </>
            )}
            {values.placesType === "Bar" && (
              <>
                <label>Types de bar</label>
                <Field name="barTypes" as="select">
                  <options value=""></options>
                  <options value="Pub">Pub</options>
                  <options value="Cocktail">Cocktail</options>
                  <options value="Dégustation">Dégustation</options>
                  <options value="Autre">Autre</options>
                </Field>
              </>
            )}
            {values.placesType === "Park" && (
              <>
                <label>Types de parc</label>
                <Field name="parkTypes" as="select">
                  <options value=""></options>
                  <options value="Municipal">Municipal</options>
                  <options value="Jardin">Jardin</options>
                  <options value="Forêt">Forêt</options>
                  <options value="Parc d'attractions">
                    Parc d'attractions
                  </options>
                  <options value="Autre">Autre</options>
                </Field>
                <label>Accès</label>
                <Field name="parkAccess" as="select">
                  <options value=""></options>
                  <options value="Public">Public</options>
                  <options value="Privé">Privé</options>
                </Field>
              </>
            )}
            <label>Gratuit ou payant ?</label>
            <Field name="isFree" as="select">
              <option value=""></option>
              <option value="true">Gratuit</option>
              <option value="false">Payant</option>
            </Field>
            {values.isFree === "false" && (
              <>
                <h1>Fourchette de prix</h1>
                <Field name="price" as="select">
                  <option value=""></option>
                  <option value="1">€</option>
                  <option value="2">€€</option>
                  <option value="3">€€€</option>
                  <option value="4">€€€€</option>
                  <option value="5">€€€€€</option>
                </Field>
              </>
            )}
            <Button type="submit">Créer</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CreatePlacesPage;
