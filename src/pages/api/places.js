import { mw } from "@/api/mw";
import { createPlace, readPlaces } from "@/db/crud";

const handle = mw(async (req, res) => {
  if (req.method === "GET") {
    console.log("API", req.body);
    const places = await readPlaces();

    res.send(places);

    return;
  }

  if (req.method === "POST") {
    // console.log("API", req.body);
    const values = req.body.values;

    if (!values) {
      res.status(422).send({ error: "missing description argument" });

      return;
    }

    const newPlace = await createPlace(values);

    res.send(newPlace);

    return;
  }

  res.status(404).send({ error: "Not found" });
});

export default handle;
