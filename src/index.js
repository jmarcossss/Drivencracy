import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import rotas  from "./routes/rotas.js";
dotenv.config();

const server = express()
server.use(cors())
server.use(express.json())
server.use(rotas)

const PORTA = 5000

server.listen(PORTA, () => {
    console.log("Servidor rodando na porta 5000...")
})