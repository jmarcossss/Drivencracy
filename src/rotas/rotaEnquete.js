import express from "express";
import { solicitacaoVote } from "../controllers/controllerVote.js";
import { cadastroVote } from "../controllers/controllerVote.js";

const rotaEnquete = express.Router();

//Registro de votos
rotaEnquete.post("/choice/:id/vote", cadastroVote);
//Retorna a opção e a quantidade de votos mais votados
rotaEnquete.get("/poll/:id/result", solicitacaoVote);

export default rotaEnquete;