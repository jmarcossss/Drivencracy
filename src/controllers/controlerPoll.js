import { databasePoll } from "../database/dbs.js";

export async function cadastroDePoll(require, response) {
    const body = response.locals.body;
    try {
    const adicionaPoll = await databasePoll.insertOne(body);
    //Deu bom, retornar status 201 e adicionar Poll
    response.status(201).send(adicionaPoll);
    }
    catch(err) {
    console.error(err);
    //Deu ruim, status 500
    response.sendStatus(500);
    }
}

export async function solicitacaoDePoll(require, response) {
    try {
    const colecaoDePolls = await databasePoll.find().toArray();
    if(!colecaoDePolls) {
    //Deu ruim, retornar status 404
    response.status(404).send({ error: "Poll não encontrado" });
    return;
    }
    //Deu bom, retornar status 200 e a lista das polls que foram armazenadas
    response.status(200).send(colecaoDePolls);
    }
    catch (err) {
    console.error(err);
    //Deu ruim, status 500
    response.sendStatus(500);
    }
} 