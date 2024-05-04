// import axios from "axios"
// import { useState } from "react"
// // A finir

// export const getServerSideProps = async ({ params }) => {
//   const response = await axios(
//     `http://localhost:3000/api/places/${params.placeId}`
//   )
//   const initialPlace = response.data

//   return {
//     props: { initialPlace },
//   }
// }
// export default function Home({ initialPlace }) {
//   const [place, setPlace] = useState(initialPlace)

//   return (
//     <div>
//       <h1 className="text-center">
//         Bienvenue sur{" "}
//         <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
//           THE BEST PLACES
//         </mark>
//       </h1>
//       <p className="py-4">
//         Découvrez les meilleurs endroits à visiter dans le monde entier.
//       </p>
//       <p className="py-4">
//         <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
//           THE BEST PLACES
//         </mark>{" "}
//         est une application web qui vous permet de créer, modifier et supprimer
//         des lieux à visiter.
//       </p>
//       <p>Voici les dernieres places ajoutées</p>
//       <ul className="flex flex-col gap-4">
//         <li key={place._id} className="group flex items-center gap-2">
//           <h2>{place.placesName}</h2>
//           <p>{place.placesType}</p>
//         </li>
//       </ul>
//     </div>
//   )
// }
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
    <div>
      <h1 className="text-center">
        Bienvenue sur{" "}
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          THE BEST PLACES
        </mark>
      </h1>
      <p className="py-4">
        Découvrez les meilleurs endroits à visiter dans le monde entier.
      </p>
      <p className="py-4">
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          THE BEST PLACES
        </mark>{" "}
        est une application web qui vous permet de créer, modifier et supprimer
        des lieux à visiter.
      </p>
      <p className=" py-4">Voici les dernières places ajoutées :</p>
      <ul className="flex flex-col gap-4">
        {places.map((place) => (
          <li key={place._id} className="group flex items-center gap-2">
            <Link
              href={`/places/${place._id}`}
              className="flex gap-2 py-1 hover:underline"
            >
              <h1>{place.placesName}</h1>{" "}
              <p className=" font-thin">{place.placesType}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
