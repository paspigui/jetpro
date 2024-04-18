import { useRouter } from "next/router";
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

export const getServerSideProps = async ({ query: { placeId } }) => {
  const { data: place } = await axios(
    `http://localhost:3000/api/places/${placeId}`
  );

  return { props: { place } };
};

// const initialValues = {
//   placesType: "",
//   placesName: "",
//   placesAddress: {
//     number: "",
//     street: "",
//     zipCode: "",
//     city: "",
//     country: "",
//   },
//   isFree: false,
// };

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
const PlaceEditPage = (place) => {
  const router = useRouter();
  const initialValues = place;
  const handleSubmit = async (values) => {
    // console.log(values);
    await axios.patch(`http://localhost:3000/api/places/${todo.id}`, values);

    router.push("/places");
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
              label="Rue"
              name="placesAddress.street"
              placeholder="Rue"
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
                <Field name="museum.types" as="select">
                  <option value=""></option>
                  <option value="Histoire">Histoire</option>
                  <option value="Art">Art</option>
                  <option value="Science">Science</option>
                  <option value="Ethnographie">Ethnographie</option>
                  <option value="Autre">Autre</option>
                </Field>
                <label>Types d'art</label>
                <Field name="museum.artTypes" as="select">
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
                <Field name="restaurant.foodTypes" as="select">
                  <option value=""></option>
                  <option value="Français">Français</option>
                  <option value="Italien">Italien</option>
                  <option value="Africain">Chinois</option>
                  <option value="Japonais">Japonais</option>
                  <option value="Fast-food">Fast-food</option>
                  <option value="Autre">Autre</option>
                </Field>
                <label>Nombre d'étoiles</label>
                <Field name="restaurant.awards" as="select">
                  <option value=""></option>
                  <option value="0">Non étoilé</option>
                  <option value="1">1 étoile</option>
                  <option value="2">2 étoiles</option>
                  <option value="3">3 étoiles</option>
                </Field>
              </>
            )}
            {values.placesType === "Bar" && (
              <>
                <label>Types de bar</label>
                <Field name="bar.types" as="select">
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
                <Field name="park.types" as="select">
                  <option value=""></option>
                  <option value="Municipal">Municipal</option>
                  <option value="Jardin">Jardin</option>
                  <option value="Forêt">Forêt</option>
                  <option value="Parc d'attractions">Parc d'attractions</option>
                  <option value="Autre">Autre</option>
                </Field>
                <label>Accessibilité</label>
                <Field name="park.accessibility" as="select">
                  <option value=""></option>
                  <option value="Gratuit">Gratuit</option>
                  <option value="Payant">Payant</option>
                </Field>
              </>
            )}
            <FormField
              label="Gratuit ?"
              name="isFree"
              placeholder="Gratuit"
              type="checkbox"
            />
            {values.isFree && (
              <>
                <h1>Fourchette de prix</h1>
                <Field name="averagePrice" as="select">
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
export default PlaceEditPage;
