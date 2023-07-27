const sequelize = require('sequelize');
const connection = require('../database/database');
const especialidade = require('./especialidadeModel');

const medico = connection.define(
    'tbl_medico',
    {
        nome_medico:{
            type: sequelize.STRING,
            allowNull: false
        },
        email_medico:{
            type: sequelize.STRING,
            allowNull: false
        },
        telefone_medico:{
            type: sequelize.STRING,
            allowNull: false
        },
        celular_medico:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

especialidade.hasMany(medico);
medico.belongsTo(especialidade);

//medico.sync({force:true});

module.exports = medico;