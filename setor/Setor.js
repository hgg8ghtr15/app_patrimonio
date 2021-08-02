const Sequelize = require('sequelize');

const connetion =  require('../database/database');

const Setor = connetion.define('Setores',{
    setor_nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    setor_slug:{
        type:Sequelize.STRING,
        allowNull:false
    }

})

Setor.sync({force:false})

module.exports = Setor;