const sequelize = require('sequelize');
const connection = require('../database/database');
const especialidade = require('../model/especialidadeModel');

const sala = connection.define(
    'tbl_sala',
    {
        num_sala:{
            type: sequelize.STRING,
            allowNull: false
        },
    }
);

especialidade.hasMany(sala);
sala.belongsTo(especialidade);

//sala.sync({force:true});

module.exports = sala;