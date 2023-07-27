const express = require('express');
const app = express();
const pacienteController = require('../Test_CRUD/controller/pacienteController');
const agendaController = require('../Test_CRUD/controller/agendaController');
const especialidadeController = require('../Test_CRUD/controller/especialidadeController');
const insumosController = require('../Test_CRUD/controller/insumosController');
const medicoController = require('../Test_CRUD/controller/medicoController');
const salaController = require('../Test_CRUD/controller/salaController');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', pacienteController);
app.use('/', agendaController);
app.use('/', especialidadeController);
app.use('/', insumosController);
app.use('/', medicoController);
app.use('/', salaController);

app.listen(3000, ()=>{
    console.log('Tudo certo!👍');
});