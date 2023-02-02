import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);
let db;

await mongoClient.connect();

db = mongoClient.db("drivencracy");
const databasePoll = db.collection("poll");
const databaseVoto = db.collection("vote");
const databaseChoice = db.collection("choice");

export { databasePoll, databaseVoto, databaseChoice };
