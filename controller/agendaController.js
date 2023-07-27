const express = require('express');
const agendaModel = require('../model/agendaModel');
const router = express.Router();

router.post('/agenda/inserir', (req,res)=>{
    let {data_cirurgia,status_cirurgia, tblPacienteId, tblMedicoId, tblSalaId} = req.body;

    agendaModel.create(
        {
            data_cirurgia,
            status_cirurgia,
            tblPacienteId,
            tblMedicoId,
            tblSalaId
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus:'Agenda marcada com sucesso!'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

router.get('/agenda/selecionar/:id', (req,res)=>{
    let {id} = req.params;
    agendaModel.findByPk(id)
    .then(
        (agenda)=>{
            res.json(agenda);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

router.put('/agenda/atualizar/:id', (req,res)=>{
    let {status_cirurgia,data_cirurgia} = req.body;
    let {id} = req.params;

    agendaModel.update(
        {
            data_cirurgia,
            status_cirurgia
        },
        {
            where:{id}
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Agenda atualizada!'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

router.delete('/agenda/excluir/:id', (req,res)=>{
    let {id} = req.params;

    agendaModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Agenda deletada com sucesso!'
            });
        }
    );
});

module.exports = router;