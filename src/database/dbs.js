import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);
let db;

await mongoClient.connect();

db = mongoClient.db("drivencracy");
const databasePoll = db.collection("poll");
const voteCollection = db.collection("vote");
const choiceCollection = db.collection("choice");

export { databasePoll, voteCollection, choiceCollection };
