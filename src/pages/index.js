import axios from "axios";
import { useState } from "react";

// export const getServerSideProps = async ({ placeId }) => {
//   const reponse = await axios(`http://localhost:3000/api/places/${placeId}`);
//   const initialPlace = reponse.data;
//   return {
//     props: { initialPlace },
//   };
// };
export default function Home({ initialPlace }) {
  const [place, setPlace] = useState(initialPlace);

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
      <p>Voici les dernieres places ajoutées</p>
      {/* <ul className="flex flex-col gap-4">
        <li key={place._id} className="group flex items-center gap-2">
          <h2>{place.placesName}</h2>
          <p>{place.placesType}</p>
        </li>
      </ul> */}
    </div>
  );
}
