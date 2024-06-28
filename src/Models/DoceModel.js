import mysql from "mysql2"
import config from "../Config.js"

class DoceModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }
    create(nome_doce,id_categoria){
        let sql = `insert into doces (nome_doce,id_categoria) values("${nome_doce}","${id_categoria}");`
       
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{//ele vau chamar a conexao
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Doce inserido"])
            }) 
        });
    }
    read(){
        let sql = `select * from doces;`
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
    update(id_doce,nome_doce,id_categoria){
        let sql = `update doces set nome_doce="${nome_doce}", id_categoria ="${id_categoria}" where id_doce="${id_doce}";`
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{ //ele vai chamar a conexao
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Doce Atualizado"])
            }) 
        }); 
    }
    delete(id_doce){
        let sql = `delete from doces where id_doce="${id_doce}";`
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{//ele vai chamar a conexao
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Doce Deletado"])
            }) 
        }); 
    }
}
//const categorias = new CategoriaModel()
//categorias.create("Argentinos")
//categorias.read()

export default new DoceModel();