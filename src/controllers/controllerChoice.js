import { databaseChoice } from "../database/dbs.js";

export async function cadastroChoice(require, response) {
    const choiceData = response.locals.choiceData;
    try {
        const adicionaChoice = await databaseChoice.insertOne(choiceData);
        //Deu bom, retornar status 201 e adicionar Choice
        response.status(201).send(adicionaChoice);
    }
    catch(err) {
        console.error(err);
        //Deu ruim, status 500
        response.sendStatus(500);
    }
}

export async function solicitacaoChoice(require, response) {
    const { id } = require.params;
    try {
        const colecaoDeChoices = await databaseChoice.find({ pollId: id }).toArray();
        if(!colecaoDeChoices) {
            //Choice já existe, retornar status 404
            response.status(404).send({ error: "Choice not found" });
            return;
        }
        //Deu bom, retornar status 200 e a lista das choices que foram armazenadas
        response.status(200).send(colecaoDeChoices);
    }
    catch(err) {
        console.error(err);
        //Deu ruim, status 500
        response.sendStatus(500);
    }
} 