import express from "express"
import rotaPoll from "./rotaPoll.js";
import rotaChoice from "./rotaChoice.js";
import rotaEnquete from "./rotaEnquete.js";

const rotas = express.Router();

//Criação das enquetes
rotas.use(rotaPoll);
//Escolha das enquetes
rotas.use(rotaChoice);
//Voto das enquetes
rotas.use(rotaEnquete);

export default rotas; 