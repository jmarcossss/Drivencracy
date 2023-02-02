import express from "express";
import { getVote, postVote } from "../controllers/controllerVote.js";

const rotaEnquete = express.Router();

//Registro de votos
rotaEnquete.post("/choice/:id/vote", postVote);
//Retorna a opção e a quantidade de votos mais votados
rotaEnquete.get("/poll/:id/result", getVote);

export default rotaEnquete;