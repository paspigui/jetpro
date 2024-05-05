import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { Button } from "@/components/Button"
import Link from "next/link"

export const getServerSideProps = async ({ params }) => {
  const reponse = await axios(
    `http://localhost:3000/api/places/${params.placeId}`
  )
  const initPlace = reponse.data

  return {
    props: { initPlace },
  }
}
const PlacesInfoPage = ({ initPlace }) => {
  const [place, setPlace] = useState(initPlace)
  const [places, setPlaces] = useState([initPlace])
  const router = useRouter()
  const { _id } = place
  const handleDelete = (placeId) => async () => {
    const deletedPlace = places.find(({ _id }) => _id === placeId)
    const newPlace = places.filter(({ _id }) => _id !== placeId)
    setPlaces(newPlace)

    try {
      await axios(`http://localhost:3000/api/places/${placeId}`)
      router.push("/places")
    } catch (err) {
      console.log("err")
      setPlace([...newPlace, deletedPlace])
    }
  }

  return (
    <>
      <h1>Nom : {place.placesName}</h1>
      <h2 className=" font-thin">{place._id}</h2>
      <p>Type d'établissement : {place.placesType}</p>
      {place.placesType === "Restaurant" && (
        <>
          <p>Type de cuisine : {place.restaurant.foodTypes}</p>
          <p>Nombre d'étoiles : {place.restaurant.awards}</p>
        </>
      )}
      {place.placesType === "Parc" && (
        <>
          <p>Type de parc : {place.park.types}</p>
          <p>Accessibilité du parc : {place.park.accessibility}</p>
        </>
      )}
      {place.placesType === "Musée" && (
        <>
          <p>Type de musée : {place.museum.types}</p>
          <p>Type d'art : {place.museum.artTypes}</p>
        </>
      )}
      {place.placesType === "Bar" && <p>{place.bar.types}</p>}
      <p>
        {" "}
        Adresse : {place.placesAddress.number} {place.placesAddress.street}
        {","}
      </p>
      <p>
        {place.placesAddress.zipCode} {place.placesAddress.city}
        {", "}
        {place.placesAddress.country}
      </p>
      <p>{place.isFree ? "Gratuit" : "Payant"}</p>

      {place.isFree === false && (
        <>
          <p>Prix moyen (1-5): {place.averagePrice}</p>
          {((place.placesType === "Musée" && !place.isFree) ||
            (place.placesType === "Parc" &&
              place.park?.accessibility === "Privé")) && (
            <p>Prix : {place.price} €</p>
          )}
        </>
      )}
      <div className="flex items-center gap-2">
        <Link href={`/places/${_id}/edit`} className="flex gap-2 ">
          <Button
            variant="primary"
            size="md"
            className=" rounded group-hover:inline"
          >
            EDIT
          </Button>
        </Link>
        <Button
          onClick={handleDelete(_id)}
          variant="danger"
          size="md"
          className=" rounded group-hover:inline"
        >
          DELETE
        </Button>
      </div>
    </>
  )
}

export default PlacesInfoPage
