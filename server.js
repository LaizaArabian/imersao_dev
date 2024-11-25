import express from "express"; // Importa o módulo express para criar o servidor web.
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Cria uma instância do express
app.use(express.static("uploads")); // passa pro express a pasta que quer abrir
routes(app);

app.listen(3000, () => // Inicia o servidor na porta 3000 e define uma função de callback.
{
    console.log("servidor escutando..."); // Imprime uma mensagem no console quando o servidor está ativo.
}
);