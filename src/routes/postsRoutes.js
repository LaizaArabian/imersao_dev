import express from "express"
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controller/postsController.js";

const storage = multer.diskStorage
({
    destination: function (req, file, cb) 
    {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) 
    {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage })
//const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => 
{
    app.use(express.json()); // Configura o express para usar JSON no corpo das requisições.
    app.get("/posts", listarPosts); // rota para buscar os posts
    app.post("/posts", postarNovoPost) // rota para criar um post
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;