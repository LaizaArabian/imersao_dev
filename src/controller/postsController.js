import { getAllPosts, criarPost} from "../models/postsModels.js";
import fs from "fs";

export async function listarPosts(req, res) // Define uma rota GET para "/posts" com uma função assíncrona.
{
    const posts = await getAllPosts(); // Obtém todos os posts chamando a função getAllPosts.
    res.status(200).json(posts); // Retorna os posts em formato JSON com status 200 (OK).
}

export async function postarNovoPost(req, res)
{
    const novoPost = req.body; // requisição do corpo através do cabeçalho
    try 
    {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } 
    catch(erro)
    {
        console.error(erro.message); // devolve o erro caso não consiga o post
        res.status(500).json({"Erro": "falha na requisição"}) // erro interno no servidor
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try 
    {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } 
    catch(erro) 
    {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}