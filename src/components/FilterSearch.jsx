import { useState, useEffect } from "react"
import axios from "axios"

const FilterSearch = () => {
  const [search, setSearch] = useState("")
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPlaces()
  }, [])

  const fetchPlaces = async () => {
    try {
      setLoading(true)
      const response = await axios("http://localhost:3000/api/places")
      setPlaces(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    setFilteredPlaces(
      places.filter((place) =>
        place.placesName.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, places])

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un lieu"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {filteredPlaces.map((place) => (
            <li key={place._id}>{place.placesName}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilterSearch
