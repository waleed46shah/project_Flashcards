import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/deck";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("gg");
});

app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose
  .connect(
    "mongodb+srv://waleed46shah:waleed46shah@flashcluster.g9igplk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
  });
