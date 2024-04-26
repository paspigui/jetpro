import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { FormField } from "@/components/FormField";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import {
  stringValidator,
  isFreeValidator,
  addressValidator,
  numberValidator,
} from "@/validators";
// import placesType from "@/pages/places/create";

export const getServerSideProps = async ({ query: { placeId } }) => {
  const { data: place } = await axios(
    `http://localhost:3000/api/places/${placeId}`
  );

  return { props: { place } };
};

const validationSchema = yup.object({
  placesType: stringValidator,
  placesName: stringValidator,
  placesAddress: addressValidator,
  isFree: isFreeValidator,
  placesDetails: yup.object().when("placesType", {
    is: "Restaurant",
    then: yup.object({
      foodTypes: stringValidator,
      awards: stringValidator,
    }),
    is: "Parc",
    then: yup.object({
      types: stringValidator,
      accessibility: stringValidator,
      price: numberValidator,
    }),
    is: "Musée",
    then: yup.object({
      types: stringValidator,
      artTypes: stringValidator,
      price: numberValidator,
    }),
    is: "Bar",
    then: yup.object({
      types: stringValidator,
    }),
  }),
});

const PlaceEditPage = (place) => {
  const router = useRouter();
  const initialValues = place;
  const handleSubmit = async (values) => {
    console.log(values);
    await axios.patch(`http://localhost:3000/api/places/${place.id}`, values);

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
            <FormField
              name="placesType"
              as="select"
              label="Choisissez un type d'établissement"
            >
              <option value=""></option>
              <option value="Restaurant">Restaurant</option>
              <option value="Musée">Musée</option>
              <option value="Bar">Bar</option>
              <option value="Parc">Parc</option>
            </FormField>
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
              type="text"
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
              type="text"
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
            {values.placesType === "Musée" && (
              <>
                <FormField
                  name="museum.types"
                  as="select"
                  label="Types de musée"
                >
                  <option value=""></option>
                  <option value="Histoire">Histoire</option>
                  <option value="Art">Art</option>
                  <option value="Science">Science</option>
                  <option value="Ethnographie">Ethnographie</option>
                  <option value="Autre">Autre</option>
                </FormField>
                <FormField
                  name="museum.artTypes"
                  as="select"
                  label="Types d'art"
                >
                  <option value=""></option>
                  <option value="Peinture">Peinture</option>
                  <option value="Sculpture">Sculpture</option>
                  <option value="Photographie">Photographie</option>
                  <option value="Autre">Autre</option>
                </FormField>
              </>
            )}
            {values.placesType === "Restaurant" && (
              <>
                <FormField
                  name="restaurant.foodTypes"
                  as="select"
                  label="Types de cuisine"
                >
                  <option value=""></option>
                  <option value="Français">Français</option>
                  <option value="Italien">Italien</option>
                  <option value="Africain">Africain</option>
                  <option value="Japonais">Japonais</option>
                  <option value="Fast-food">Fast-food</option>
                  <option value="Autre">Autre</option>
                </FormField>

                <FormField
                  name="restaurant.awards"
                  as="select"
                  label="Nombre d'étoiles"
                >
                  <option value=""></option>
                  <option value="0">Non étoilé</option>
                  <option value="1">1 étoile</option>
                  <option value="2">2 étoiles</option>
                  <option value="3">3 étoiles</option>
                </FormField>
              </>
            )}
            {values.placesType === "Bar" && (
              <>
                <FormField name="bar.types" as="select" label="Types de bar">
                  <option value=""></option>
                  <option value="Pub">Pub</option>
                  <option value="Cocktail">Cocktail</option>
                  <option value="Dégustation">Dégustation</option>
                  <option value="Autre">Autre</option>
                </FormField>
              </>
            )}
            {values.placesType === "Parc" && (
              <>
                <FormField name="park.types" as="select" label="Types de parc">
                  <option value=""></option>
                  <option value="Municipal">Municipal</option>
                  <option value="Jardin">Jardin</option>
                  <option value="Forêt">Forêt</option>
                  <option value="Parc d'attractions">Parc d'attractions</option>
                  <option value="Autre">Autre</option>
                </FormField>

                <FormField
                  name="park.accessibility"
                  as="select"
                  label="Accessibilité"
                >
                  <option value=""></option>
                  <option value="Privé">Privé</option>
                  <option value="Public">Public</option>
                </FormField>
              </>
            )}
            <FormField
              label="Gratuit ?"
              name="isFree"
              placeholder="Gratuit"
              type="checkbox"
              disabled={
                values.placesType === "Restaurant" ||
                values.placesType === "Bar" ||
                (values.placesType === "Parc" &&
                  values?.park?.accessibility === "Privé")
              }
            />
            {!values.isFree && (
              <>
                <FormField
                  name="averagePrice"
                  as="select"
                  label="Fourchette de prix"
                >
                  <option value=""></option>
                  <option value="1">€</option>
                  <option value="2">€€</option>
                  <option value="3">€€€</option>
                  <option value="4">€€€€</option>
                  <option value="5">€€€€€</option>
                </FormField>
                {((values.placesType === "Musée" && !values.isFree) ||
                  (values.placesType === "Parc" &&
                    values?.park?.accessibility === "Privé")) && (
                  <>
                    <FormField
                      label="Prix"
                      name="price"
                      placeholder="Prix"
                      type="text"
                    />
                  </>
                )}
              </>
            )}
            <Button type="submit">Éditer</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default PlaceEditPage;
