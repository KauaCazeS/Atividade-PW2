const sequelize = require('sequelize');

const connection =  new sequelize(
    'Atividade_PW2',
    'root',
    '',
    {
        host:'localhost',
        port:'3307',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;