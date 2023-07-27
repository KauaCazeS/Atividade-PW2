const sequelize = require('sequelize');
const connection = require('../database/database');
const paciente = require('./pacienteModel');
const medico = require('./medicoModel');
const sala = require('../model/salaModel');

const agenda = connection.define(
    'tbl_agenda',
    {
        data_cirurgia:{
            type: sequelize.STRING,
            allowNull: false
        },
        status_cirurgia:{
            type: sequelize.BOOLEAN,
            allowNull: false
        }
    }
);

paciente.hasMany(agenda);
agenda.belongsTo(paciente);

medico.hasMany(agenda);
agenda.belongsTo(medico);

sala.hasMany(agenda);
agenda.belongsTo(sala);

//agenda.sync({force:true});

module.exports = agenda;