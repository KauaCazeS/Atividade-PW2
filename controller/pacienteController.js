const express = require('express');

const pacienteModel = require('../model/pacienteModel');

const router = express.Router();

router.post('/paciente/inserir', (req,res)=>{
    let {nome_paciente,telefone_paciente,celular_paciente,email_paciente,nome_responsavel,telefone_responsavel} = req.body;

    pacienteModel.create(
        {
            nome_paciente,
            telefone_paciente,
            celular_paciente,
            email_paciente,
            nome_responsavel,
            telefone_responsavel
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus:'Paciente cadastrado!'
            });
    }).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

router.get('/paciente/selecionar/:id', (req,res)=>{
    let {id} = req.params;
    pacienteModel.findByPk(id)
    .then(
        (paciente)=>{
            res.json(paciente);
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

router.put('/paciente/atualizar/:id', (req,res)=>{
    let {nome_paciente,telefone_paciente,celular_paciente,email_paciente,nome_responsavel,telefone_responsavel} = req.body;
    let {id} = req.params;

    pacienteModel.update(
        {
            nome_paciente,
            telefone_paciente,
            celular_paciente,
            email_paciente,
            nome_responsavel,
            telefone_responsavel
        },
        {
            where:{id}
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'Paciente atualizado!'
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

router.delete('/paciente/excluir/:id', (req,res)=>{
    let {id} = req.params;

    pacienteModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'Paciente excluido com sucesso'
            });
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

module.exports = router;