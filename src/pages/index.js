import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    fetchPlaces()
  }, [])

  const fetchPlaces = async () => {
    try {
      const response = await axios("http://localhost:3000/api/places")
      setPlaces(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Bienvenue sur{" "}
        <span className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          THE BEST PLACES
        </span>
      </h1>
      <p className="text-center mb-8">
        Découvrez les meilleurs endroits à visiter dans le monde entier.
      </p>
      <p className="text-center mb-8">
        The best places est une application web qui vous permet de créer,
        modifier et supprimer des lieux à visiter.
      </p>
      <h2 className="text-2xl font-bold mb-4">
        Voici les dernières places ajoutées :
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {places.map((place) => (
          <li key={place._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2">{place.placesName}</h3>
            <p className="text-gray-500">{place.placesType}</p>
            <Link
              className=" no-underline hover:underline"
              href={`/places/${place._id}`}
            >
              Voir plus
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
