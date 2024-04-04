import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { placesTypeValidator, placesNameValidator,  } from "@/validators"
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"

const initialValues = {
  placesType: ["restaurant", "museum", "bar", "park", "art"],
  placesName: "",
  placesAddress: "",
  placesCity: "",
  placesZipCode: "",
  placesCountry: "",
}
const validationSchema = yup.object({
  placesType: placesTypeValidator,
  placesName: placesNameValidator,
  placesAddress: placesTypeValidator,
  placesCity: placesTypeValidator,
  placesZipCode: placesTypeValidator,
  placesCountry: placesTypeValidator,
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
      <h1 className=" py-2">Ajoutez une places</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>

      <Form>
        <FormField
          label="Type de place"
          name="placesType"
          placeholder="Type de place"
          type="text"
          />
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
          type="text"
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