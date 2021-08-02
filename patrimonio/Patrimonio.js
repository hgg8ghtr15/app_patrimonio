const Sequelize = require('sequelize');
const connetion = require('../database/database');

const Patrimonio = connetion.define('Patrimonios',{
    numero_patrimonio:{
        type:Sequelize.STRING,
        allowNull:false
    },
    setor:{
        type:Sequelize.String,
        allowNull:false
    }
})

Patrimonio.sync({force:true})

module.exports = Patrimonio;