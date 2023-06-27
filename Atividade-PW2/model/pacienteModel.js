const sequelize = require('sequelize');

const connection = require('../database/database');

const pacientes = connection.define(
    'tbl_pacientes',
    {
        nome_paciente:{
            type: sequelize.STRING,
            allowNull: false
        },
        telefone_paciente:{
            type: sequelize.STRING,
            allowNull: false
        },
        celular_paciente:{
            type: sequelize.STRING,
            allowNull: false
        },
        email_paciente:{
            type: sequelize.STRING,
            allowNull: false
        },
        nome_responsavel:{
            type: sequelize.STRING,
            allowNull: true
        },
        telefone_responsavel:{
            type: sequelize.STRING,
            allowNull: true
        },
    }
);

//pacientes.sync({force:true});

module.exports = pacientes;