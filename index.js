const express = require('express');

const app = express();

/**
 * Configuração de navegação de paginas.
 */
app.set("view engine", "ejs")
app.use(express.static("public"))


app.get("/",(request, response) => {
  return response.render("index")
})

app.get("/patrimonio/listar",(request, response) => {
  return response.render("patrimonio/listar")
})

app.get("/patrimonio/cadastrar",(request, response) => {
  return response.render("patrimonio/cadastrar")
})

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
  console.log('Servidor online')
} )