export const getServerSideProps = ({ query }) => ({
  props: {
    placeId: query.placeId,
  },
});
const PlacePage = ({ placeId }) => `Place #${placeId}`;

export default PlacePage;
