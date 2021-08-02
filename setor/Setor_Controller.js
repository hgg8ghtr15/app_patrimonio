const express = require('express');
const router = express.Router()
const Setor = require("./Setor")
const slugify = require("slugify")

router.get('/setor',  (req, res)=>{
    Setor.findAll().then(setores =>{
        return res.render('setor/index', {setores})
    })
})
router.get('/setor/cadastrar',  (req, res)=>{
    return res.render('setor/cad_setor')
})

router.post('/setor/cadastrar',  (req, res)=>{
    const {setor_nome} = req.body
    console.log(setor_nome)
    if (setor_nome){
    Setor.create({
        setor_nome:setor_nome,
        setor_slug:slugify(setor_nome)
    }).then(()=>{
        return res.render('setor/cad_setor')
    })
    }else{
        return res.render('setor/cad_setor')
    }
})

router.get("/setor/editar/:id", (req, res)=>{
    const {id} = req.params
    if(id){
        if(!isNaN(id)){
            Setor.findByPk(id).then(setor =>{
                return res.render('setor/edit_setor', {setor})
            })
        }
    }else{
        return res.redirect("/setor")
    }
})

router.post("/setor/update", (req, res)=>{
    const { id, setor_nome} = req.body
    console.log(id,setor_nome)
    Setor.update(
        {
            setor_nome:setor_nome,
            setor_slug:slugify(setor_nome)
        },{
            where:{
                id:id
            }
        }).then(()=>{
        return res.redirect("/setor")
    })
})


router.post("/setor/deletar",(req, res)=>{
    const { id} = req.body
    if(id){
        if(!isNaN(id)){
            Setor.destroy({
                where:{
                    id:id
                }
            }).then(()=>{
                return res.redirect("/setor")
                }
            )
        }
        return res.redirect("/setor")
    }else{
        return res.redirect("/setor")
    }

    return res.redirect("/setor")
})
module.exports = router