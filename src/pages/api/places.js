import { mw } from "@/api/mw";
import { createPlace } from "@/db/crud";

const handle = mw(async (req, res) => {
  // Read (collection) => GET /todos
  if (req.method === "GET") {
    const places = await readPlaces();

    res.send(places);

    return;
  }

  // Create (item) => POST /todos
  if (req.method === "POST") {
    console.log("API", req.body);
    const values = req.body.values;

    // if (!description) {
    //   res.status(422).send({ error: "missing description argument" });

    //   return;
    // }

    const newPlace = await createPlace(values);

    res.send(newPlace);

    return;
  }

  res.status(404).send({ error: "Not found" });
});

export default handle;
