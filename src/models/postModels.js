import conectarAoBanco from "../config/db-config.js"; // Importa a função para conectar ao banco de dados.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão do ambiente.

export async function getAllPosts() // Define uma função assíncrona para obter todos os posts.
{
    const db = conexao.db("imersao"); // Seleciona o banco de dados "imersao".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array.
}