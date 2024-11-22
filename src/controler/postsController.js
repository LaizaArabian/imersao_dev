import { getAllPosts } from "../models/postModels.js";

export async function listarPosts(req, res) // Define uma rota GET para "/posts" com uma função assíncrona.
{
    const posts = await getAllPosts(); // Obtém todos os posts chamando a função getAllPosts.
    res.status(200).json(posts); // Retorna os posts em formato JSON com status 200 (OK).
}