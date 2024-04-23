import { useState } from "react";
import axios from "axios";

export const getServerSideProps = async ({ params }) => {
  const reponse = await axios(
    `http://localhost:3000/api/places/${params.placeId}`
  );
  const initPlace = reponse.data;
  return {
    props: { initPlace },
  };
};
// to upgrade

const PlacesInfoPage = ({ initPlace }) => {
  const [place, setPlace] = useState(initPlace);

  return (
    <>
      <h1>{place.placesName}</h1>
      <p>{place.placesType}</p>
    </>
  );
};

export default PlacesInfoPage;
