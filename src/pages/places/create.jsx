import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"
import { Field } from "formik"
import { numberValidator, stringValidator } from "@/validators"

const initialValues = {
  placesType: ["Restaurant", "Museum", "Bar", "Park", "Art"],
  placesName: "",
  placesAddress: "",
  placesCity: "",
  placesZipCode: "",
  placesCountry: "",
}
const validationSchema = yup.object({
  placesType: stringValidator,
  placesName: stringValidator,
  placesAddress: stringValidator,
  placesCity: stringValidator,
  placesZipCode: numberValidator,
  placesCountry: stringValidator,
})
const CreatePlacesPage = () => {
  const handleSubmit = async ({ placesType, placesName, placesAddress, placesCity, placesZipCode, placesCountry }, { resetForm }) => {
    await axios.post("http://localhost:3000/api/places", {
      placesType,
      placesName,
      placesAddress,
      placesCity,
      placesZipCode,
      placesCountry,
    })

    resetForm()
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>

        <Form>
          Choisissez le type de d'endroit : 
          {initialValues.placesType.map((type) => (
            <label key={type} className="mr-2">
            <Field type="radio" name="placesType" value={type} className="mr-2" />
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
          label="Adresse de la place"
          name="placesAddress"
          placeholder="Adresse de la place"
          type="text"
          />
        <FormField
          label="Ville"
          name="placesCity"
          placeholder="Ville de la place"
          type="text"
          />
        <FormField
          label="Code postal"
          name="placesZipCode"
          placeholder="Code postal"
          type="integer"
          />
        <FormField
          label="Pays"
          name="placesCountry"
          placeholder="Pays"
          type="text"
          />
        <Button type="submit">Créer</Button>
      </Form>
    </Formik>
  </div>
  )
}
export default CreatePlacesPage;