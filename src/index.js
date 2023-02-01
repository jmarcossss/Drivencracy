import express from "express"
import cors from "cors"

const server = express()
server.use(cors())
server.use(express.json())

const PORTA = 5000

server.listen(PORTA, () => {
    console.log("Servidor rodando na porta 5000...")
})