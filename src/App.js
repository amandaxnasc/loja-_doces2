import express from "express";
import CategoriaController from "./Controllers/CategoriaController.js";

const server = express()

server.use(express.json())

server.get("/",(req,rs)=>{
    res.status(200).json("Servidor Funcionando")
})

server.post("/categorias", CategoriaController.create)
server.get("/categorias", CategoriaController.read)
server.put("/categorias/:id_categoria",CategoriaController.update)
server.delete("/categorias/:id_categoria",CategoriaController.delete)
server.listen(5000)