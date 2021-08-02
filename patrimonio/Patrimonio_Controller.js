const express = require('express');
const router = express.Router();


router.get("/",(request, response) => {
    return response.render("index")
})

router.get("/patrimonio/listar",(request, response) => {
    return response.render("patrimonio/listar")
})

router.get("/patrimonio/cadastrar",(request, response) => {
    return response.render("patrimonio/cadastrar")
})

module.exports = router;