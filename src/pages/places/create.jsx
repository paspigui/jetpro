import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { FormField } from "@/components/FormField";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { Field } from "formik";
import {
  stringValidator,
  isFreeValidator,
  addressValidator,
  selectValidator,
} from "@/validators";

const initialValues = {
  placesType: "",
  placesName: "",
  placesAddress: {
    number: "",
    street: "",
    zipCode: "",
    city: "",
    country: "",
  },
  isFree: true,
  parkAccess: "",
  museumTypes: "",
  artTypes: "",
  foodTypes: "",
  placesAwards: "",
  barTypes: "",
  parkTypes: "",
  price: "",
};
const validationSchema = yup.object({
  isFree: isFreeValidator,
  placesName: stringValidator,
  placesAddress: addressValidator,
  placesType: selectValidator,
  parkAccess: selectValidator,
  museumTypes: selectValidator,
  artTypes: selectValidator,
  foodTypes: selectValidator,
  placesAwards: selectValidator,
  barTypes: selectValidator,
  parkTypes: selectValidator,
});
const CreatePlacesPage = () => {
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    await axios.post("http://localhost:3000/api/places", { values });

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
            <label>Choisissez un type d'établissement </label>
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
              label="Numéro de voie"
              name="placesAddress.number"
              placeholder="Numéro de voie"
              type="string"
            />
            <FormField
              label="Type de voie"
              name="placesAddress.street"
              placeholder="Type de voie"
              type="text"
            />
            <FormField
              label="Code postal"
              name="placesAddress.zipCode"
              placeholder="Code postal"
              type="integer"
            />
            <FormField
              label="Ville"
              name="placesAddress.city"
              placeholder="Ville"
              type="text"
            />
            <FormField
              label="Pays"
              name="placesAddress.country"
              placeholder="Pays"
              type="text"
            />
            {values.placesType === "Museum" && (
              <>
                <label>Types de musée</label>
                <Field name="museumTypes" as="select">
                  <option value=""></option>
                  <option value="Histoire">Histoire</option>
                  <option value="Art">Art</option>
                  <option value="Science">Science</option>
                  <option value="Ethnographie">Ethnographie</option>
                  <option value="Autre">Autre</option>
                </Field>
                <label>Types d'art</label>
                <Field name="artTypes" as="select">
                  <option value=""></option>
                  <option value="Peinture">Peinture</option>
                  <option value="Sculpture">Sculpture</option>
                  <option value="Photographie">Photographie</option>
                  <option value="Autre">Autre</option>
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
                  <option value=""></option>
                  <option value="Pub">Pub</option>
                  <option value="Cocktail">Cocktail</option>
                  <option value="Dégustation">Dégustation</option>
                  <option value="Autre">Autre</option>
                </Field>
              </>
            )}
            {values.placesType === "Park" && (
              <>
                <label>Types de parc</label>
                <Field name="parkTypes" as="select">
                  <option value=""></option>
                  <option value="Municipal">Municipal</option>
                  <option value="Jardin">Jardin</option>
                  <option value="Forêt">Forêt</option>
                  <option value="Parc d'attractions">Parc d'attractions</option>
                  <option value="Autre">Autre</option>
                </Field>
                <label>Accès</label>
                <Field name="parkAccess" as="select">
                  <option value=""></option>
                  <option value="Public">Public</option>
                  <option value="Privé">Privé</option>
                </Field>
              </>
            )}
            <FormField
              label="Gratuit ?"
              name="isFree"
              placeholder="Gratuit"
              type="checkbox"
            />
            {values.isFree === false && (
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
                {values.placesType === "Museum" ||
                  (values.placesType === "Park" && (
                    <>
                      <FormField
                        label="Prix"
                        name="price"
                        placeholder="Prix"
                        type="number"
                      />
                    </>
                  ))}
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
