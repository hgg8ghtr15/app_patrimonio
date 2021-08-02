
const express = require('express');
const connetion = require('./database/database')
const bodyParser = require('body-parser')

const Patrimonio_Controller = require('./patrimonio/Patrimonio_Controller')
const Setor_Controller = require('./setor/Setor_Controller')

const app = express();

/**
* Banco de dados
* */
connetion.authenticate()
    .then(()=> console.log("Conectado com sucesso"))
    .catch((error)=> console.log(error))

/**
 * Configuração de navegação de paginas.
 */
app.set("view engine", "ejs")
app.use(express.static("public"))

/**
 * Body.parser
 * */
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

/**
 * Rotas de controller
* */
app.use("/", Setor_Controller)

app.get("/", (request, response) => {
  return response.render("./index")
})

/**
 * Servidor
 */

const PORT = process.env.PORT || 4000
// const PORT = 4000

app.listen(PORT,()=>{
  console.log('Servidor online')
} )