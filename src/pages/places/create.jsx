import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { descriptionValidator, isDoneValidator } from "@/validators"
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"

const initialValues = {
  description: "",
  isDone: false,
}
const validationSchema = yup.object({
  description: descriptionValidator,
  isDone: isDoneValidator,
})
const CreatePlacesPage = () => {
  const handleSubmit = async ({ description, isDone }, { resetForm }) => {
    await axios.post("http://localhost:3000/api/places", {
      description,
      isDone,
    })

    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <FormField
          name="placesTypes"
          placeholder="Enter a description"
          label="Description"
        />
        <FormField
          className="items-center flex-row"
          name="isDone"
          type="checkbox"
          label="Done?"
        />
        <Button type="submit">Create</Button>
      </Form>
    </Formik>
  )
}

export default CreatePlacesPage