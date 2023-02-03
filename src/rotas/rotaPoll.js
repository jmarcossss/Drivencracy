import express from "express";
import { cadastroDePoll } from "../controllers/controlerPoll.js";
import { solicitacaoDePoll } from "../controllers/controlerPoll.js";
import { middlewarePoll } from "../middlewares/middlewarePoll.js";

const rotaPoll = express.Router();
//Cadastro de uma enquete
rotaPoll.post("/poll", middlewarePoll, cadastroDePoll);
//Lista das enquetes para ser exibida
rotaPoll.get("/poll", solicitacaoDePoll);

export default rotaPoll; 