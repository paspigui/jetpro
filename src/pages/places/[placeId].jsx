export const getServerSideProps = ({ query }) => ({
  props: {
    placeId: query.placeId,
  },
});

const PlacePage = ({ placeId }) => {
  return <div>Place: {placeId}</div>;
};

export default PlacePage;
