import express from "express";
import { getPoll, postPoll } from "../controllers/poll.controller.js";
import { validatePostPoll } from "../middlewares/pollValidation.middleware.js";

const rotaPoll = express.Router();
//Cadastro de uma enquete
rotaPoll.post("/poll", validatePostPoll, postPoll);
//Lista das enquetes para ser exibida
rotaPoll.get("/poll", getPoll);

export default rotaPoll;