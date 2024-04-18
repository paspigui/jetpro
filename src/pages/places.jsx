import { Button } from "@/components/Button";
import axios from "axios";
// import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export const getServerSideProps = async () => {
  const reponse = await axios("http://localhost:3000/api/places");
  const places = reponse.data;
  return {
    props: { initialPlaces: places },
  };
};
const PlacesPage = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces);
  const handleDelete = (placeId) => async () => {
    const deletedPlace = places.find(({ id }) => id === placeId);
    const newPlaces = places.filter(({ id }) => id !== placeId);
    setPlaces(newPlaces);

    try {
      await axios.delete(`http://localhost:3000/api/places/${placeId}`);
    } catch (err) {
      setPlaces([...newPlaces, deletedPlace]);
    }
  };

  return (
    <ul className="flex flex-col gap-4">
      {places.map(({ _id, placesName }) => (
        <li key={_id} className="group flex items-center gap-2">
          <Link href={`/places/${_id}`} className="flex gap-2 py-1">
            <span className="h-6 w-6 border border-green-500" /> {placesName}{" "}
          </Link>
          <Button
            onClick={handleDelete(_id)}
            variant="danger"
            size="md"
            className="hidden group-hover:inline"
          >
            DELETE
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default PlacesPage;
