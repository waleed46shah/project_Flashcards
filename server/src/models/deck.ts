import mongoose from "mongoose";
const Schema = mongoose.Schema;
//const ObjectId = mongoose.Types.ObjectId;

const DeckSechema = new Schema({
  title: String,
});

const DeckModel = mongoose.model("Deck", DeckSechema);

export default DeckModel;
