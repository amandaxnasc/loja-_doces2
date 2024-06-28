import mysql from "mysql2"
import config from "../Config.js"

class CategoriaModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }
    create(nome_categoria){
        let sql = `insert into categorias (nome_categoria) values("${nome_categoria}");`
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{//ele vau chamar a conexao
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Categoria inserida"])
            }) 
        });
    }
    read(){
        let sql = `select * from categorias;`
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{//ele vau chamar a conexao
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            }) 
        });
        
    }
    update(id_categoria,nome_categoria){
        let sql = `update categorias set nome_categoria="${nome_categoria}" where id_categoria="${id_categoria}";`
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{//ele vai chamar a conexao
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado"])
            }) 
        }); 
    }
    delete(id_categoria){
        let sql = `delete from categorias where id_categoria="${id_categoria}";`
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{//ele vai chamar a conexao
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado"])
            }) 
        }); 
    }
}
//const categorias = new CategoriaModel()
//categorias.create("Argentinos")
//categorias.read()

export default new CategoriaModel();