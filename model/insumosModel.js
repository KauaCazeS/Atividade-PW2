const sequelize =  require('sequelize');
const connection = require('../database/database');
const paciente = require('./pacienteModel');

const insumos = connection.define(
    'tbl_insumos',
    {
        nome_insumo:{
            type:sequelize.STRING,
            allowNull: true
        },
        quantidade_insumo:{
            type:sequelize.STRING,
            allowNull: true
        }
    }
);

paciente.hasMany(insumos);
insumos.belongsTo(paciente);

//insumos.sync({force:true});

module.exports = insumos;