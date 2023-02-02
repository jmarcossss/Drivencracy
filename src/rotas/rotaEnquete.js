import express from "express";
import { getVote, postVote } from "../controllers/vote.controller.js";

const rotaEnquete = express.Router();

//Registro de votos
rotaEnquete.post("/choice/:id/vote", postVote);
//Retorna a opção e a quantidade de votos
rotaEnquete.get("/poll/:id/result", getVote);

export default rotaEnquete;