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
      <h2>{place._id}</h2>
      <p>{place.placesType}</p>
      <p>
        {place.placesAddress.number} {place.placesAddress.street}
      </p>
      <p>
        {place.placesAddress.zipCode} {place.placesAddress.city}{" "}
        {place.placesAddress.country}
      </p>
      {/* <p>{place.isFree}</p>
      <p>{place.placesDetails}</p> */}
    </>
  );
};

export default PlacesInfoPage;
