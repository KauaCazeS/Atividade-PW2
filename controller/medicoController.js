const express = require('express');

const medicoModel = require('../model/medicoModel');

const router = express.Router();

router.post('/medico/inserir', (req,res)=>{
    let {nome_medico, email_medico, telefone_medico, celular_medico} = req.body;
    medicoModel.create(
        {
            celular_medico,
            telefone_medico,
            email_medico,
            nome_medico
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Médico cadastrado!'
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

router.get('/medico/selecionar/:id', (req,res)=>{
    let {id} = req.params;
    medicoModel.findByPk(id)
    .then(
        (medico)=>{
            res.json(medico);
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

router.put('/medico/atualizar', (req,res)=>{
    let {nome_medico, email_medico, telefone_medico, celular_medico} = req.body;
    medicoModel.update(
        {
            celular_medico,
            telefone_medico,
            email_medico,
            nome_medico
        },
        {
            where:{id}
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Médico atualizado!'
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

router.delete('/medico/excluir/:id', (req,res)=>{
    let {id} = req.params;
    medicoModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Médico excluido!'
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

module.exports = router;