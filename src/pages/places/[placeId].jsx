export const getServerSideProps = ({ query }) => ({
  props: {
    placeId: query.placeId,
  },
});

const PlacePage = ({ placeId }) => {
  return (
    <div>
      <p>id: {placeId}</p>
    </div>
  );
};
export default PlacePage;
