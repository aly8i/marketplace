import dbConnect from "../../util/mongo";
import Resturant from "../../models/Resturant";
// import AuthorizedPost from "../../../middlewares/AuthorizedPost";
export default 
// AuthorizedPost( 
    async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const resturants = await Resturant.find();
      res.status(200).json(resturants);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
        const resturant = await Resturant.create(req.body);
        res.status(201).json(resturant);
      } catch (err) {
        res.status(900).json(err);
      }
  }
}
// )
;
