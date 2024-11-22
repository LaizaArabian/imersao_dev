import express from "express"
import { listarPosts } from "../controler/postsController.js";

const routes = (app) => 
{
    app.use(express.json()); // Configura o express para usar JSON no corpo das requisições.
    app.get("/posts", listarPosts);
}

export default routes;