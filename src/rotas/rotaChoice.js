import express from "express";
import { solicitacaoChoice } from "../controllers/controllerChoice.js";
import { cadastroChoice } from "../controllers/controllerChoice.js";
import middlewareChoice from "../middlewares/middlewareChoice.js";

const rotaChoice = express.Router();

//Opção a ser cadastrada
rotaChoice.post("/choice", middlewareChoice, cadastroChoice);
//Lista de opções de uma enquete
rotaChoice.get("/poll/:id/choice", solicitacaoChoice);

export default rotaChoice;