const sequelize = require('sequelize');
const connection = require('../database/database');

const especialidade = connection.define(
    'tbl_especialidade',
    {
        nome_especialidade:{
            type: sequelize.STRING,
            allowNull: false
        },
    }
);

//especialidade.sync({force:true});

module.exports = especialidade;