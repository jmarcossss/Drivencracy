import express from "express";
import {getChoice, postChoice} from "../controllers/choice.controller.js";
import validatePostChoice from "../middlewares/choiceValidation.middleware.js";

const rotaChoice = express.Router();

//Opção a ser cadastrada
rotaChoice.post("/choice", validatePostChoice, postChoice)
//Lista de opções de uma enquete
rotaChoice.get("/poll/:id/choice", getChoice)

export default rotaChoice