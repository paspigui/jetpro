export const getServerSideProps = ({ query }) => ({
  props: {
    placesId: query.placesId,
  },
})
const PlacesPage = ({ placesId }) => `Places #${placesId}`

export default PlacesPage