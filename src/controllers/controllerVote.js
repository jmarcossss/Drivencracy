import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import { databasePoll } from "../database/dbs.js";
import { databaseChoice } from "../database/dbs.js";
import { databaseVoto } from "../database/dbs.js";

export async function postVote(require, response) {
  const { id } = require.params;
  try {
    //Faz a busca do choice
    let waitDbChoice = await databaseChoice.findOne({ _id: new ObjectId(id) });
    if(!waitDbChoice) {
      //Se não encontrar o choice, dá erro 404
      return response.status(404).send("Não encontrado");
    }
    await databaseVoto.insertOne({
      createAt: dayjs().format("YYYY-MM-DD HH:mm"),
      choiceId: new ObjectId(id),
    });
    //Se tiver encontrado, imcrementa o voto em 1 unidade, status 201
    response.status(201).send("Voto registrado com sucesso");
  }
  //Erro interno do server
  catch(err) {
    console.error(err);
    response.sendStatus(500);
  }
}

export async function getVote(require, response) {
  const { id } = require.params;
  try {
    //Faz a busca da poll
    let poll = await databasePoll.findOne({ _id: new ObjectId(id) });
    if(!poll) {
      //Se não encontrar a poll, dá erro 404
      return response.status(404).send("Enquete não encontrada");
    }
    const fullChoices = await databaseChoice.find({ pollId: new ObjectId(id) }).toArray();
    const winner = incrementaFunc(fullChoices);  
    let dibParam = {...poll, responseult: { ...winner }, };
    response.send(dibParam);
  }
  //Erro interno do server
  catch(err) {
    console.error(err);
    response.sendStatus(500);
  }
}

//Função que contabiliza e soma a quantidade de votos
//de uma choice de uma enquete
function incrementaFunc(arr) {
  const ocorrencias = {};
  let votos = 0;
  let resulFinal = null;
  
  for (let element of arr) {
    if(!ocorrencias[element.title])
      ocorrencias[element.title] = 1;
    else
      ocorrencias[element.title] += 1;
  }

  for (const title in ocorrencias) {
    if(ocorrencias[title] > votos) {
      votos = ocorrencias[title];
      resulFinal = title;
    }
  }
  return { title: resulFinal, votes: votos };
}