import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/db-config.js"; // Importa a função para conectar ao banco de dados.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão do ambiente.

export async function getAllPosts() // Define uma função assíncrona para obter todos os posts.
{
    const db = conexao.db("imersao"); // Seleciona o banco de dados "imersao".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array.
}

export async function criarPost(novoPost) 
{
    const db = conexao.db("imersao"); // Seleciona o banco de dados "imersao".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.insertOne(novoPost)
}

export async function atualizarNovoPost(id, novoPost) 
{
    const db = conexao.db("imersao");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id); // pegar a id que recebeu e por no objeto que o mongo entende
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}