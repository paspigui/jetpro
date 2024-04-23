import { Button } from "@/components/Button";
import axios from "axios";
// import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

export const getServerSideProps = async ({ params }) => {
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
            {placesName}{" "}
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
  );
};

export default PlacesPage;
