import { Button } from "@/components/Button"
import axios from "axios"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaDeleteLeft } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"
import { placesType } from "@/pages/places/create"

export const getServerSideProps = async () => {
  const response = await axios("http://localhost:3000/api/places")
  const places = response.data

  return {
    props: { initialPlaces: places },
  }
}
const PlacesPage = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces)
  const [selectedType, setSelectedType] = useState("")
  const [foodTypesFilter, setFoodTypesFilter] = useState("")
  const [awardsFilter, setAwardsFilter] = useState("")
  const [museumTypesFilter, setMuseumTypesFilter] = useState("")
  const [museumArtTypesFilter, setMuseumArtTypesFilter] = useState("")
  const [barTypesFilter, setBarTypesFilter] = useState("")
  const [parkTypesFilter, setParkTypesFilter] = useState("")
  const [parkAccessibilityFilter, setParkAccessibilityFilter] = useState("")
  const handleDelete = (placeId) => async () => {
    const deletedPlace = places.find(({ _id }) => _id === placeId)
    const newPlaces = places.filter(({ _id }) => _id !== placeId)
    setPlaces(newPlaces)

    try {
      await axios.delete(`http://localhost:3000/api/places/${placeId}`)
    } catch (err) {
      console.log("err")
      setPlaces([...newPlaces, deletedPlace])
    }
  }

  useEffect(() => {
    if (selectedType) {
      const filteredPlaces = initialPlaces.filter(
        (place) => place.placesType === selectedType
      )
      setPlaces(filteredPlaces)
    } else {
      setPlaces(initialPlaces)
    }
  }, [selectedType, initialPlaces])

  useEffect(() => {
    if (foodTypesFilter) {
      const filteredPlaces = initialPlaces.filter(
        (place) => place.restaurant?.foodTypes === foodTypesFilter
      )
      setPlaces(filteredPlaces)
    } else {
      setPlaces(initialPlaces)
    }
  }, [foodTypesFilter, initialPlaces])

  useEffect(() => {
    if (awardsFilter) {
      const filteredPlaces = initialPlaces.filter(
        (place) => place.restaurant?.awards === awardsFilter
      )
      setPlaces(filteredPlaces)
    } else {
      setPlaces(initialPlaces)
    }
  }, [awardsFilter, initialPlaces])

  useEffect(() => {
    if (museumTypesFilter) {
      const filteredPlaces = initialPlaces.filter(
        (place) => place.museum?.types === museumTypesFilter
      )
      setPlaces(filteredPlaces)
    } else {
      setPlaces(initialPlaces)
    }
  }, [museumTypesFilter, initialPlaces])

  useEffect(() => {
    if (museumArtTypesFilter) {
      const filteredPlaces = initialPlaces.filter(
        (place) => place.museum?.artTypes === museumArtTypesFilter
      )
      setPlaces(filteredPlaces)
    } else {
      setPlaces(initialPlaces)
    }
  }, [museumArtTypesFilter, initialPlaces])

  useEffect(() => {
    if (barTypesFilter) {
      const filteredPlaces = initialPlaces.filter(
        (place) => place.bar?.types === barTypesFilter
      )
      setPlaces(filteredPlaces)
    } else {
      setPlaces(initialPlaces)
    }
  }, [barTypesFilter, initialPlaces])

  useEffect(() => {
    if (parkTypesFilter) {
      const filteredPlaces = initialPlaces.filter(
        (place) => place.park?.types === parkTypesFilter
      )
      setPlaces(filteredPlaces)
    } else {
      setPlaces(initialPlaces)
    }
  }, [parkTypesFilter, initialPlaces])

  useEffect(() => {
    if (parkAccessibilityFilter) {
      const filteredPlaces = initialPlaces.filter(
        (place) => place.park?.accessibility === parkAccessibilityFilter
      )
      setPlaces(filteredPlaces)
    } else {
      setPlaces(initialPlaces)
    }
  }, [parkAccessibilityFilter, initialPlaces])

  return (
    <>
      <h1 className="text-2xl font-bold">Places</h1>
      <div className="flex justify-end">
        <select
          className="mt-4 w-full p-2 border rounded-md"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Tous</option>
          {placesType.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {selectedType === "Restaurant" && (
          <>
            <select
              className="mt-4 w-full p-2 border rounded-md ml-2"
              value={foodTypesFilter}
              onChange={(e) => setFoodTypesFilter(e.target.value)}
            >
              <option value="">Tous</option>
              <option value="Français">Français</option>
              <option value="Italien">Italien</option>
              <option value="Africain">Africain</option>
              <option value="Japonais">Japonais</option>
              <option value="Fast-food">Fast-food</option>
              <option value="Autre">Autre</option>
            </select>

            <select
              className="mt-4 w-full p-2 border rounded-md ml-2"
              value={awardsFilter}
              onChange={(e) => setAwardsFilter(e.target.value)}
            >
              <option value="">Tous</option>
              <option value="0">Non-étoilé</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </>
        )}
        {selectedType === "Musée" && (
          <>
            <select
              className="mt-4 w-full p-2 border rounded-md ml-2"
              value={museumTypesFilter}
              onChange={(e) => setMuseumTypesFilter(e.target.value)}
            >
              <option value="">Tous</option>
              <option value="Histoire">Histoire</option>
              <option value="Art">Art</option>
              <option value="Science">Science</option>
              <option value="Ethnographie">Ethnographie</option>
              <option value="Autre">Autre</option>
            </select>
            <select
              className="mt-4 w-full p-2 border rounded-md ml-2"
              value={museumArtTypesFilter}
              onChange={(e) => setMuseumArtTypesFilter(e.target.value)}
            >
              <option value="">Tous</option>
              <option value="Peinture">Peinture</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Photographie">Photographie</option>
              <option value="Autre">Autre</option>
            </select>
          </>
        )}
        {selectedType === "Bar" && (
          <>
            <select
              className="mt-4 w-full p-2 border rounded-md ml-2"
              value={barTypesFilter}
              onChange={(e) => setBarTypesFilter(e.target.value)}
            >
              <option value="">Tous</option>
              <option value="Pub">Pub</option>
              <option value="Cocktail">Cocktail</option>
              <option value="Dégustation">Dégustation</option>
              <option value="Autre">Autre</option>
            </select>
          </>
        )}
        {selectedType === "Parc" && (
          <>
            <select
              className="mt-4 w-full p-2 border rounded-md ml-2"
              value={parkTypesFilter}
              onChange={(e) => setParkTypesFilter(e.target.value)}
            >
              <option value="">Tous</option>
              <option value="Municipal">Municipal</option>
              <option value="Jardin">Jardin</option>
              <option value="Forêt">Forêt</option>
              <option value="Parc d'attractions">Parc d'attractions</option>
              <option value="Autre">Autre</option>
            </select>
            <select
              className="mt-4 w-full p-2 border rounded-md ml-2"
              value={parkAccessibilityFilter}
              onChange={(e) => setParkAccessibilityFilter(e.target.value)}
            >
              <option value="">Tous</option>
              <option value="Privé">Privé</option>
              <option value="Public">Public</option>
            </select>
          </>
        )}

        {selectedType && (
          <Button
            onClick={() => setSelectedType("")}
            variant="danger"
            size="md"
            className="rounded-md ml-2 mt-4"
          >
            Réinitialiser
          </Button>
        )}
      </div>
      {places.length === 0 && (
        <p className="text-red-500">Aucun établissement trouvé</p>
      )}

      <ul className="flex flex-col gap-4">
        {places.map(({ _id, placesName, placesType }) => (
          <li key={_id} className="group flex items-center gap-2">
            <Link
              href={`/places/${_id}`}
              className="flex gap-2 py-1 hover:underline"
            >
              {placesName} <p className=" font-thin">{placesType}</p>
            </Link>
            <Link href={`/places/${_id}/edit`} className="flex gap-2 py-1">
              <Button
                variant="primary"
                size="md"
                className="hidden group-hover:inline"
              >
                <FaEdit />
              </Button>
            </Link>
            <Button
              onClick={handleDelete(_id)}
              variant="danger"
              size="md"
              className="hidden group-hover:inline"
            >
              <FaDeleteLeft />
            </Button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PlacesPage
